// 处理favicon请求
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getFavicon') {
      fetch(request.url)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            sendResponse({ dataUrl: reader.result });
          };
          reader.readAsDataURL(blob);
        })
        .catch(error => {
          console.error('获取favicon失败:', error);
          sendResponse(null);
        });
      return true;
    }
    
    // 处理二维码生成请求
    if (request.type === 'generateQRCode') {
      // 注入QRCode库
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['qrcode.min.js']
      }).then(() => {
        // 生成二维码
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          func: (url, title, favicon) => {
            return new Promise((resolve) => {
              // 创建临时div
              const tempDiv = document.createElement('div');
              tempDiv.style.display = 'none';
              document.body.appendChild(tempDiv);
              
              // 创建QRCode实例
              const qr = new QRCode(tempDiv, {
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
                    const canvas = tempDiv.querySelector('canvas');
                    if (canvas) {
                      resolve(canvas);
                    } else {
                      setTimeout(checkQRCode, 50);
                    }
                  };
                  checkQRCode();
                });
              };
              
              // 等待favicon加载完成
              const loadFavicon = (url) => {
                return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.crossOrigin = "Anonymous";
                  img.onload = () => resolve(img);
                  img.onerror = reject;
                  img.src = url;
                });
              };
              
              // 主流程
              (async () => {
                try {
                  // 等待二维码生成
                  const canvas = await waitForQRCode();
                  console.log('QR code canvas ready');
                  
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
                  
                  // 加载并绘制favicon
                  try {
                    const img = await loadFavicon(favicon);
                    console.log('Favicon loaded, drawing to canvas');
                    ctx.drawImage(img, x, y, size, size);
                    console.log('Favicon drawn to canvas');
                  } catch (error) {
                    console.error('Favicon load error:', error);
                    // 尝试加载默认favicon
                    try {
                      const defaultImg = await loadFavicon('/favicon.ico');
                      ctx.drawImage(defaultImg, x, y, size, size);
                    } catch (e) {
                      console.error('Default favicon load error:', e);
                    }
                  }
                  
                  // 获取最终的二维码HTML
                  const qrcodeHtml = tempDiv.innerHTML;
                  console.log('QR code generation complete');
                  
                  // 清理临时元素
                  document.body.removeChild(tempDiv);
                  resolve(qrcodeHtml);
                } catch (error) {
                  console.error('QR code generation error:', error);
                  document.body.removeChild(tempDiv);
                  resolve(null);
                }
              })();
            });
          },
          args: [request.url, request.title, request.favicon]
        }).then(([result]) => {
          if (result.result) {
            sendResponse({ qrcode: result.result });
          } else {
            sendResponse({ error: '生成二维码失败' });
          }
        }).catch(error => {
          console.error('生成二维码失败:', error);
          sendResponse({ error: '生成二维码失败' });
        });
      });
      return true;
    }
  });