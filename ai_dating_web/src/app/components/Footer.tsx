'use client';

const Footer = () => {
  const footerLinks = [
    { href: '/privacy', label: '隐私政策' },
    { href: '/terms', label: '使用条款' },
    { href: '/contact', label: '联系我们' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司信息 */}
          <div>
            <span className="text-2xl font-bold text-purple-400">AI Love Match</span>
            <p className="mt-4 text-gray-300">
              基于AI和心理学的关系分析平台，帮助你找到真爱。
            </p>
          </div>

          {/* 链接 */}
          <div>
            <h4 className="text-lg font-medium mb-4">链接</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h4 className="text-lg font-medium mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.1,3.9C17.9,1.7 15,0.5 12,0.5C5.8,0.5 0.6,5.7 0.6,12C0.6,13.9 0.8,15.8 1.2,17.6L0,24L6.4,22.8C8.2,23.2 10.1,23.4 12,23.4C18.2,23.4 23.4,18.2 23.4,12C23.4,9 22.3,6.1 20.1,3.9M12,21.4C10.2,21.4 8.5,21.2 6.9,20.8L6.6,20.7L2.8,21.8L3.9,18L3.7,17.7C3.3,16.1 3.1,14.4 3.1,12.6C3.1,6.7 7.1,2.7 13,2.7C15.7,2.7 18.2,3.6 20.1,5.5C22,7.4 22.9,9.9 22.9,12.6C22.9,18.5 18.9,22.5 13,22.5H12Z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-gray-300">contact@ailovematch.com</p>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 AI恋爱与婚姻契合度预测平台. 保留所有权利.
          </p>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            开始测评
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 