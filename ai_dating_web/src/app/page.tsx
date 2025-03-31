'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI预测你们的爱情契合度
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            基于心理学和人工智能，科学分析你们的关系潜力
          </p>
          <Link
            href="/assessment-result"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            开始测评
          </Link>
        </div>
      </main>
    </div>
  );
}
