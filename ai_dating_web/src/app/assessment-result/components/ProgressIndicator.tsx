'use client';

import { ProgressIndicatorProps } from '../types';

export default function ProgressIndicator({
  currentStep,
  totalSteps,
  isComplete,
}: ProgressIndicatorProps) {
  const progress = isComplete ? 100 : (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-gray-700">
            {isComplete ? '测评完成' : `第 ${currentStep} 步 / 共 ${totalSteps} 步`}
          </div>
          <div className="text-sm font-medium text-gray-700">
            {Math.round(progress)}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index + 1 <= currentStep
                  ? 'bg-indigo-600'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 