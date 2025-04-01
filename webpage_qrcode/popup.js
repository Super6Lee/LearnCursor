document.addEventListener('DOMContentLoaded', async () => {
    const loading = document.getElementById('loading');
    const qrcodeDiv = document.getElementById('qrcode');
    const siteNameDiv = document.getElementById('siteName');
    
    loading.style.display = 'block';
    
    try {
      // 获取当前标签页信息
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = tab.url;
      const title = tab.title;
      
      // 设置网站名称
      siteNameDiv.textContent = title;
      
      // 清空之前的二维码
      qrcodeDiv.innerHTML = '';
      
      // 创建QRCode实例
      const qr = new QRCode(qrcodeDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      
      // 等待二维码生成完成
      const waitForQRCode = () => {
        return new Promise((resolve) => {
          const checkQRCode = () => {
            const canvas = qrcodeDiv.querySelector('canvas');
            if (canvas) {
              resolve(canvas);
            } else {
              setTimeout(checkQRCode, 50);
            }
          };
          checkQRCode();
        });
      };
      
      const canvas = await waitForQRCode();
      console.log('QR Code generated');
      
      try {
        // 获取favicon
        const favicon = await getFavicon(tab.id);
        console.log('Favicon URL:', favicon);
        
        if (favicon) {
          // 使用chrome.runtime.sendMessage获取favicon数据
          chrome.runtime.sendMessage({
            type: 'getFavicon',
            url: favicon
          }, response => {
            if (response && response.dataUrl) {
              const img = new Image();
              img.onload = () => {
                console.log('Favicon loaded');
                const ctx = canvas.getContext('2d');
                const size = Math.min(canvas.width, canvas.height) * 0.2;
                const x = (canvas.width - size) / 2;
                const y = (canvas.height - size) / 2;
                
                // 绘制白色背景
                const padding = 4;
                ctx.fillStyle = 'white';
                ctx.fillRect(
                  x - padding,
                  y - padding,
                  size + padding * 2,
                  size + padding * 2
                );
                
                // 绘制favicon
                ctx.drawImage(img, x, y, size, size);
                console.log('Favicon drawn');
              };
              
              img.onerror = (error) => {
                console.error('Favicon加载失败:', error);
              };
              
              img.src = response.dataUrl;
            }
          });
        }
      } catch (error) {
        console.error('处理favicon时出错:', error);
      }
      
    } catch (error) {
      console.error('Error:', error);
      qrcodeDiv.innerHTML = '<p style="color: red;">生成二维码失败</p>';
    } finally {
      loading.style.display = 'none';
    }
  });
  
  // 获取favicon的函数
  async function getFavicon(tabId) {
    try {
      // 首先尝试获取标签页的favicon
      const tab = await chrome.tabs.get(tabId);
      if (tab.favIconUrl) {
        return tab.favIconUrl;
      }
      
      // 如果没有favicon，尝试从页面获取
      const [{result}] = await chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => {
          // 尝试获取高清favicon
          const icon = document.querySelector('link[rel="icon"][sizes="32x32"], link[rel="icon"][sizes="48x48"], link[rel="icon"][sizes="64x64"]');
          if (icon) {
            return icon.href;
          }
          // 尝试获取普通favicon
          const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
          if (favicon) {
            return favicon.href;
          }
          // 尝试从meta标签获取
          const meta = document.querySelector('meta[property="og:image"]');
          if (meta) {
            return meta.content;
          }
          return null;
        }
      });
      
      return result;
    } catch (error) {
      console.error('获取favicon失败:', error);
      return null;
    }
  }