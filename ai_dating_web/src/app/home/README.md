# AI恋爱与婚姻契合度预测平台 - 首页设计

## 设计目标

创建一个简约而吸引人的首页，向用户清晰传达产品核心价值，并引导用户开始测评流程。设计遵循MVP原则，注重核心功能的展示和用户转化。

## 需要考虑的设计要点

1. **视觉设计与品牌形象**
   - **色彩方案**：
     - 主色调：深紫色 (#6D28D9) 和靛蓝色 (#4F46E5)，传达信任感、专业性和科技感
     - 辅助色：浅紫色 (#C4B5FD) 和天蓝色 (#93C5FD)，增加层次感
     - 强调色：玫瑰色 (#F472B6) 或珊瑚色 (#FB7185)，用于突出CTA按钮
     - 中性色：深灰 (#1F2937)、浅灰 (#F3F4F6) 和白色，用于文本和背景
   - **字体选择**：
     - 标题：Geist Sans，粗体，清晰醒目
     - 正文：Geist Sans，常规体，保持易读性
     - 字号层次：移动端标题20-24px，正文14-16px；桌面端标题28-36px，正文16-18px
   - **图像风格**：
     - 插图：扁平化风格，抽象的人物连接、心理学和AI元素图形
     - 图标：线性图标，圆角处理，保持轻盈感
     - 配图色调与整体色彩方案一致
   - **Logo设计**：
     - 简化版心形与脑波/AI元素结合
     - 可使用主色调渐变效果
     - 确保在小尺寸下仍清晰可辨

2. **用户体验与交互设计**
   - **视觉层次**：
     - 使用大小、颜色对比和空间关系建立明确的信息层次
     - 主价值主张和CTA按钮位于视觉中心
     - 使用卡片、阴影和边框分隔不同内容区域
   - **用户引导**：
     - 通过箭头、按钮突出和滚动提示引导用户浏览
     - 主要行动点使用动效强调（如轻微悬停效果）
     - 在页面关键位置重复CTA按钮
   - **减少摩擦点**：
     - 移除所有非必要表单字段
     - 使用单一页面流程，避免多页切换
     - 提供明确的进度指示
     - 测评开始按钮无需任何注册信息
   - **响应式设计**：
     - 移动优先设计，确保在小屏设备上的良好体验
     - 导航在移动端简化为汉堡菜单
     - 桌面版利用更大屏幕提供并排布局
     - 触控友好：按钮尺寸不小于44px×44px
   - **页面加载优化**：
     - 图像使用WebP格式和渐进式加载
     - 实现懒加载非首屏内容
     - 首屏关键CSS内联加载
     - 预加载关键资源

3. **内容策略**
   - **价值主张**：
     - 主标题："AI预测你们的爱情契合度"
     - 副标题："基于心理学和人工智能，科学分析你们的关系潜力"
     - 突出核心差异点：科学性、便捷性和实用性
   - **科学可信描述**：
     - 简要提及所基于的心理学理论（如依恋理论、五大人格特质）
     - 解释AI如何分析多维度数据提供个性化结果
     - 使用专业而简洁的语言，避免过度技术术语
   - **信任建立元素**：
     - "已有X人完成测评"数据展示
     - 2-3条简短用户评价，附带头像和姓名首字母
     - 简单的满意度百分比数据
   - **隐私保护说明**：
     - 简短明确："我们重视您的隐私"标语
     - 测试数据加密存储说明
     - 强调"无需注册"和"匿名测评"的特点

4. **转化优化**
   - **主CTA按钮**：
     - 颜色：使用强调色，与页面其他元素形成鲜明对比
     - 尺寸：足够大，移动端宽度占屏幕80%，桌面端至少200px宽
     - 位置：首屏中心偏下，视线自然落点
     - 文案："免费开始测评"或"立即测试契合度"
     - 微动效：轻微的悬停放大或颜色变化
   - **次要CTA**：
     - "了解更多"按钮：边框样式，位于主CTA下方
     - "查看示例结果"链接：文本链接，带下划线或图标
     - 位置策略：与主CTA形成视觉组合但不抢占视线
   - **社会证明**：
     - 数字化指标：用户数量、完成测评数、平均满意度
     - 简短用户引言：突出积极结果和洞见
     - 小型合作伙伴或媒体提及标志（如有）
   - **A/B测试准备**：
     - CTA文案变体：行动导向 vs 好奇心驱动
     - 主视觉区域背景：抽象图形 vs 人物插图
     - 价值主张表述：情感侧重 vs 科学侧重

## 页面结构

1. **导航栏**
   - **设计细节**：
     - 高度：移动端60px，桌面端70px
     - 背景：半透明白色，轻微阴影
     - Logo尺寸：高度30-40px，左对齐
     - 导航项目：3-4个核心选项（首页、关于我们、常见问题）
     - 测评按钮：小号版CTA，右对齐
     - 滚动效果：向下滚动时固定在顶部
   - **响应式行为**：
     - 移动端导航折叠为汉堡菜单
     - 测评按钮在所有视图中保持可见

2. **主视觉区域**
   - **设计细节**：
     - 高度：移动端90vh，桌面端80vh
     - 背景：渐变色或简单抽象图形，不干扰文本可读性
     - 标题：左对齐或居中，最大尺寸文本
     - 副标题：与标题形成对比，简洁表达价值
     - CTA按钮：突出显示，上下留有充足空间
     - 可选邮箱输入：简约设计，仅一个字段和一个按钮
   - **视觉元素**：
     - 抽象的连接/关系图形，使用品牌色彩
     - 轻量级动画效果（如波浪、粒子或渐变流动）
     - 简约人物插图，表现关系和情感

3. **产品介绍区**
   - **设计细节**：
     - 布局：3-4列卡片（桌面）或单列滚动卡片（移动）
     - 每个特性卡片包含：图标、标题（1-2词）和简短描述（1-2句）
     - 卡片设计：轻微阴影、圆角、充足内边距
     - 间距：卡片之间留有明确间隔
   - **特性内容**：
     - 特性1：科学测评 - 基于心理学理论的多维度分析
     - 特性2：AI匹配 - 精准算法评估契合度
     - 特性3：即时体验 - 无需注册，立即获取洞见
     - 特性4：隐私保护 - 数据加密，注重隐私安全

4. **流程说明区**
   - **设计细节**：
     - 步骤指示：圆形数字或图标，连接线展示流程
     - 每步骤包含：简短标题和1-2句描述
     - 简洁插图：展示每个步骤的关键场景
   - **流程内容**：
     - 步骤1：完成测评 - 回答精心设计的问题（约20分钟）
     - 步骤2：获取分析 - AI生成详细的契合度报告
     - 步骤3：了解洞见 - 发现关系潜力和可能挑战
     - 步骤4（可选）：邀请伴侣 - 获得双方视角的完整分析

5. **简单案例展示**
   - **设计细节**：
     - 布局：轮播或并排卡片
     - 案例卡片：圆角、轻微阴影、充足内边距
     - 用户头像：抽象或初始字母头像
     - 评价星级：简单视觉表示
   - **内容示例**：
     - 案例1："测评准确指出了我们的沟通模式差异，帮助我们改善了关系。" - J.L., 28岁
     - 案例2："通过测评我们发现了惊人的契合点，现在正式开始交往了！" - A.M., 32岁
     - 案例3："测评帮助我们识别潜在冲突点，让我们更好地相互理解。" - T.K. & L.R.

6. **底部区域**
   - **设计细节**：
     - 背景：深色背景，形成与主体内容的对比
     - 结构：简洁的多列布局（桌面）或堆叠布局（移动）
     - 字体：小号文本，清晰可读
   - **内容组织**：
     - 左侧：简要的团队/使命介绍（2-3句话）
     - 中间：基础链接（隐私政策、使用条款、联系我们）
     - 右侧：简单社交媒体图标和版权信息
     - 底部：重复CTA"开始测评"按钮

## 技术实现

- **前端框架**：
  - Next.js 15.2.4 应用路由器架构
  - React 19.0.0 组件
  - TypeScript 类型安全开发
- **样式解决方案**：
  - TailwindCSS 4 实现响应式设计
  - 自定义颜色变量配置与品牌色一致
  - 使用CSS变量实现主题统一
  - CSS模块隔离组件样式
- **交互与动效**：
  - 使用React Spring或Framer Motion实现流畅过渡
  - 适量使用CSS动画增强视觉体验
  - 使用IntersectionObserver实现滚动触发效果
- **性能优化**：
  - 图片使用next/image组件优化
  - 实现组件懒加载
  - 关键CSS内联
  - 字体显示策略优化

## 用户流程

1. **访问首页**
   - 确保在3秒内加载关键内容
   - 立即展示价值主张和行动按钮
   - 视觉焦点引导关注主CTA
2. **了解产品价值**
   - 滚动浏览核心特性和优势
   - 流程图和案例增强理解和信任
   - 重点信息采用视觉强调
3. **开始测评**
   - 点击CTA按钮无缝转入测评流程
   - 不需要注册账号或填写个人信息
   - 流程开始前提供简短说明
4. **完成测评流程**
   - 分阶段回答问题（人格、价值观、情感需求）
   - 清晰的进度指示
   - 提供"稍后继续"选项（使用浏览器存储）
5. **查看结果**
   - 无缝过渡到结果分析页面
   - 提供总体契合度和维度分析
   - 展示简单直观的可视化图表
6. **结果保存或再测评**
   - 提供邮箱保存选项（可选）
   - 生成唯一分享链接
   - "再测一次"按钮清晰可见

## 设计注意事项

- **简洁界面原则**：
  - 每个区域专注于单一核心信息
  - 移除所有非关键视觉元素
  - 使用充足的留白增强焦点
  - 信息密度适中，避免视觉疲劳
- **CTA按钮优化**：
  - 在页面多个关键位置重复出现
  - 使用对比色和足够大的尺寸
  - 简洁明了的行动指向文案
  - 微动效增强吸引力
- **价值主张传达**：
  - 使用简单直白的语言
  - 避免行业术语和复杂概念
  - 将抽象概念具体化（如"提高95%的沟通效率"）
  - 使用短句和项目符号增强可读性
- **移动端优化**：
  - 触控友好的界面元素
  - 简化导航和内容布局
  - 优先展示核心内容和CTA
  - 确保文本在小屏幕上可读
- **设计一致性**：
  - 创建设计系统基础（按钮、卡片、间距等）
  - 在整个界面保持一致的视觉语言
  - 颜色和字体使用遵循既定规则
  - 确保品牌语调一致，温暖专业

## 组件规划

1. **Header组件**
   - **技术规格**：
     - 使用Next.js Link组件实现导航
     - 响应式布局使用Tailwind的flex和hidden类
     - 固定定位实现滚动固定效果
   - **组件结构**：
     ```jsx
     <header className="fixed w-full bg-white/90 shadow-sm">
       <div className="container mx-auto flex justify-between items-center py-4">
         <LogoComponent />
         <DesktopNav className="hidden md:flex" />
         <MobileMenuButton className="md:hidden" />
         <CTAButton size="small" className="ml-4" />
       </div>
       <MobileMenu className="md:hidden" />
     </header>
     ```
   - **参数配置**：
     - 导航项目：可配置的导航链接数组
     - 按钮文本：可自定义CTA按钮文案
     - 透明度：滚动时背景透明度变化

2. **Hero区域组件**
   - **技术规格**：
     - 背景使用CSS渐变或SVG图形
     - 响应式文本大小使用Tailwind文本类
     - 可选的简单动画效果
   - **组件结构**：
     ```jsx
     <section className="min-h-[90vh] md:min-h-[80vh] flex items-center">
       <div className="container mx-auto px-4">
         <div className="max-w-2xl">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">AI预测你们的爱情契合度</h1>
           <p className="text-xl mb-8">基于心理学和人工智能，科学分析你们的关系潜力</p>
           <div className="flex flex-col sm:flex-row gap-4">
             <CTAButton size="large" />
             <SecondaryButton />
           </div>
           <OptionalEmailCapture className="mt-8" />
         </div>
       </div>
       <BackgroundElement className="absolute inset-0 -z-10" />
     </section>
     ```
   - **参数配置**：
     - 标题和副标题文本
     - 背景样式选项
     - 是否显示邮箱捕获

3. **特性展示组件**
   - **技术规格**：
     - 使用CSS Grid或Flexbox实现响应式布局
     - 卡片使用Tailwind的阴影和圆角类
     - 图标使用SVG或图标字体
   - **组件结构**：
     ```jsx
     <section className="py-16 bg-gray-50">
       <div className="container mx-auto px-4">
         <SectionHeading title="核心功能" subtitle="我们如何帮助你找到真爱" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
           {features.map(feature => (
             <FeatureCard 
               key={feature.id}
               icon={feature.icon}
               title={feature.title}
               description={feature.description}
             />
           ))}
         </div>
       </div>
     </section>
     ```
   - **参数配置**：
     - 特性数据数组：图标、标题、描述
     - 布局选项：网格或列表
     - 卡片样式变体

4. **流程说明组件**
   - **技术规格**：
     - 使用Flexbox或Grid创建步骤流程
     - 连接线使用CSS伪元素或SVG
     - 响应式调整在移动端垂直显示
   - **组件结构**：
     ```jsx
     <section className="py-16">
       <div className="container mx-auto px-4">
         <SectionHeading title="简单四步" subtitle="快速了解你们的契合度" />
         <div className="mt-12 relative">
           <StepConnector className="hidden md:block" />
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {steps.map((step, index) => (
               <StepCard
                 key={step.id}
                 number={index + 1}
                 title={step.title}
                 description={step.description}
                 icon={step.icon}
               />
             ))}
           </div>
         </div>
         <div className="text-center mt-12">
           <CTAButton size="medium" />
         </div>
       </div>
     </section>
     ```
   - **参数配置**：
     - 步骤数据：编号、标题、描述、图标
     - 连接线样式：直线、虚线或波浪
     - 是否显示底部CTA

5. **简化案例组件**
   - **技术规格**：
     - 可选使用轮播组件（如Swiper或自定义）
     - 卡片使用Flexbox或Grid实现
     - 星级评价使用SVG图标
   - **组件结构**：
     ```jsx
     <section className="py-16 bg-purple-50">
       <div className="container mx-auto px-4">
         <SectionHeading title="用户故事" subtitle="他们的真实体验" />
         <div className="mt-12">
           <TestimonialSlider>
             {testimonials.map(item => (
               <TestimonialCard
                 key={item.id}
                 quote={item.quote}
                 author={item.author}
                 rating={item.rating}
                 avatar={item.avatar}
               />
             ))}
           </TestimonialSlider>
         </div>
       </div>
     </section>
     ```
   - **参数配置**：
     - 评价数据：引述、作者、评分、头像
     - 显示样式：卡片或引用样式
     - 轮播设置：自动播放、速度、控制器样式

6. **Footer组件**
   - **技术规格**：
     - 使用Grid或Flexbox实现多列布局
     - 响应式在移动端转为堆叠布局
     - 使用SVG社交媒体图标
   - **组件结构**：
     ```jsx
     <footer className="bg-gray-900 text-white py-12">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
             <LogoComponent light />
             <p className="mt-4 text-gray-300">基于AI和心理学的关系分析平台，帮助你找到真爱。</p>
           </div>
           <div>
             <h4 className="text-lg font-medium mb-4">链接</h4>
             <FooterLinks links={footerLinks} />
           </div>
           <div>
             <h4 className="text-lg font-medium mb-4">联系我们</h4>
             <SocialIcons icons={socialIcons} />
             <p className="mt-4 text-gray-300">contact@ailovematch.com</p>
           </div>
         </div>
         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-400">© 2024 AI恋爱与婚姻契合度预测平台. 保留所有权利.</p>
           <CTAButton size="small" className="mt-4 md:mt-0" />
         </div>
       </div>
     </footer>
     ```
   - **参数配置**：
     - 页脚链接数组
     - 社交媒体图标和链接
     - 联系信息
     - 是否显示CTA按钮 