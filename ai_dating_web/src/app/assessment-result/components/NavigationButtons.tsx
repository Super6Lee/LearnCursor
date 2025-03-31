'use client';

import { NavigationButtonsProps } from '../types';

export default function NavigationButtons({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onBack}
        disabled={isFirstStep}
        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
          isFirstStep
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
      >
        返回
      </button>
      <button
        onClick={onNext}
        className="px-6 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
      >
        {isLastStep ? '完成' : '继续'}
      </button>
    </div>
  );
} 