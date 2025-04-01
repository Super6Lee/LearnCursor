// 创建favicon元素
function createFaviconElement() {
    const favicon = document.createElement('div');
    favicon.className = 'qrcode-favicon';
    
    const img = document.createElement('img');
    img.src = getFaviconUrl();
    img.alt = document.title;
    
    favicon.appendChild(img);
    document.body.appendChild(favicon);
    
    return favicon;
  }
  
  // 创建二维码弹窗
  function createQRCodePopup() {
    const popup = document.createElement('div');
    popup.className = 'qrcode-popup';
    
    const qrcodeDiv = document.createElement('div');
    qrcodeDiv.id = 'qrcode';
    
    const siteName = document.createElement('div');
    siteName.className = 'site-name';
    siteName.textContent = document.title;
    
    popup.appendChild(qrcodeDiv);
    popup.appendChild(siteName);
    document.body.appendChild(popup);
    
    return popup;
  }
  
  // 获取favicon URL
  function getFaviconUrl() {
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
    
    // 尝试获取默认favicon
    const defaultFavicon = new URL('/favicon.ico', window.location.origin).href;
    return defaultFavicon;
  }
  
  // 初始化
  function init() {
    const favicon = createFaviconElement();
    const popup = createQRCodePopup();
    
    // 点击favicon显示二维码
    favicon.addEventListener('click', async () => {
      if (popup.classList.contains('show')) {
        popup.classList.remove('show');
        return;
      }
      
      // 显示加载状态
      const qrcodeDiv = popup.querySelector('#qrcode');
      qrcodeDiv.innerHTML = '<div style="text-align: center; padding: 20px;">正在生成二维码...</div>';
      popup.classList.add('show');
      
      // 获取favicon URL
      const faviconUrl = getFaviconUrl();
      console.log('Using favicon URL:', faviconUrl);
      
      // 发送消息给background script生成二维码
      chrome.runtime.sendMessage({
        type: 'generateQRCode',
        url: window.location.href,
        title: document.title,
        favicon: faviconUrl
      }, response => {
        if (response.error) {
          qrcodeDiv.innerHTML = `<div style="color: red; text-align: center; padding: 20px;">${response.error}</div>`;
          return;
        }
        
        if (response.qrcode) {
          qrcodeDiv.innerHTML = response.qrcode;
        } else {
          qrcodeDiv.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">生成二维码失败</div>';
        }
      });
    });
    
    // 点击其他地方关闭弹窗
    document.addEventListener('click', (e) => {
      if (!popup.contains(e.target) && !favicon.contains(e.target)) {
        popup.classList.remove('show');
      }
    });
  }
  
  // 等待页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }