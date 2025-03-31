'use client';

import Link from 'next/link';

export default function AssessmentResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              AI恋爱测评
            </Link>
            <nav>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                返回首页
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
} 