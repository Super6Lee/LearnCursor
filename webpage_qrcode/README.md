 # 网页二维码 Chrome 插件

这是一个优雅的Chrome浏览器插件，可以为当前网页生成带有网站图标的二维码。

## 功能特点

- 自动为当前网页生成二维码
- 二维码中心显示网站favicon图标
- 二维码下方显示网站名称
- 优雅的苹果风格界面设计
- 支持所有网页

## 安装步骤

1. 下载本项目代码
2. 下载 [qrcode.min.js](https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js) 文件并放在项目根目录
3. 在Chrome浏览器中打开 `chrome://extensions/`
4. 开启右上角的"开发者模式"
5. 点击"加载已解压的扩展程序"
6. 选择本项目文件夹

## 使用方法

1. 在任意网页点击Chrome工具栏中的插件图标
2. 等待二维码生成
3. 使用手机扫描二维码即可访问当前网页

## 项目结构

```
webpage_qrcode/
├── manifest.json      # 插件配置文件
├── popup.html        # 弹出窗口HTML
├── popup.js          # 弹出窗口逻辑
├── qrcode.min.js     # 二维码生成库
└── images/           # 图标文件夹
    ├── icon16.png    # 16x16图标
    ├── icon48.png    # 48x48图标
    └── icon128.png   # 128x128图标
```

## 注意事项

- 请确保已下载 qrcode.min.js 文件
- 插件需要访问当前标签页的权限
- 建议使用最新版本的Chrome浏览器