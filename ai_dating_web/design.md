# AI 约会网站项目设计文档

## 项目目录结构

```
ai_dating_web/
├── node_modules/         # 项目依赖
├── public/               # 静态资源目录
│   ├── file.svg          # 静态图标
│   ├── globe.svg         # 静态图标
│   ├── next.svg          # Next.js 图标
│   ├── vercel.svg        # Vercel 图标
│   └── window.svg        # 静态图标
├── src/                  # 源代码目录
│   └── app/              # 应用程序主目录 (Next.js App Router)
│       ├── favicon.ico   # 网站图标
│       ├── globals.css   # 全局样式
│       ├── layout.tsx    # 根布局组件
│       └── page.tsx      # 主页面组件
├── .gitignore            # Git 忽略文件
├── eslint.config.mjs     # ESLint 配置
├── next-env.d.ts         # Next.js 类型定义
├── next.config.ts        # Next.js 配置
├── package-lock.json     # 依赖版本锁定文件
├── package.json          # 项目配置和依赖
├── postcss.config.mjs    # PostCSS 配置
├── README.md             # 项目说明文档
└── tsconfig.json         # TypeScript 配置
```

## 技术栈

- **框架**: Next.js 15.2.4 (最新版)
- **UI 库**: React 19.0.0 (最新版)
- **开发语言**: TypeScript
- **样式解决方案**: TailwindCSS 4
- **字体**: Geist (Sans 和 Mono)
- **构建工具**: Turbopack
- **代码质量工具**: ESLint 9

## 项目特点

1. 使用 Next.js 的 App Router 架构
2. 采用 TypeScript 进行类型安全开发
3. 使用 TailwindCSS 进行响应式设计
4. 支持快速开发的 Turbopack 构建工具
5. 采用模块化组件设计
6. 响应式布局支持移动端和桌面端

## 项目环境

- **开发环境**: `npm run dev` (使用 Turbopack 加速)
- **生产构建**: `npm run build`
- **生产环境**: `npm run start`
- **代码检查**: `npm run lint`

## 文件路径别名

项目配置了 `@/` 路径别名指向 `./src/` 目录，方便导入组件和模块。

## 当前状态

目前项目是一个基础模板，包含了 Next.js 的默认欢迎页面。需要根据实际需求进行进一步开发，增加约会网站相关的功能和页面。 