'use client';

import { ResultDisplayProps } from '../types';

export default function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) return null;

  return (
    <div className="space-y-8">
      {/* 总体契合度 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">总体契合度</h2>
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeDasharray={`${result.overallScore}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-indigo-600">
                {result.overallScore}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 维度分析 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">维度分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(result.dimensions).map(([key, value]) => (
            <div key={key} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-lg font-medium text-gray-900 capitalize mb-2">
                {key}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${value}%` }}
                />
              </div>
              <div className="text-sm text-gray-600 mt-1">{value}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* 建议与洞察 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">建议与洞察</h2>
        <div className="space-y-4">
          {result.suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="text-sm font-medium text-indigo-600 mb-1">
                {suggestion.category}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2">
                {suggestion.title}
              </div>
              <div className="text-gray-600">
                {suggestion.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 