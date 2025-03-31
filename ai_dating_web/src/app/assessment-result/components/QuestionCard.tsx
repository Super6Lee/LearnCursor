'use client';

import { QuestionCardProps } from '../types';
import { useState, useEffect } from 'react';

// 示例问题数据
const questions = [
  {
    id: 'q1',
    text: '在社交场合中，你更倾向于：',
    description: '请选择最符合你日常行为习惯的选项',
    options: [
      { value: 'a', label: '主动与他人交谈', description: '喜欢主动开启话题' },
      { value: 'b', label: '等待他人搭话', description: '更倾向于被动社交' },
      { value: 'c', label: '观察他人互动', description: '喜欢观察社交场景' },
    ],
    category: 'personality',
  },
  {
    id: 'q2',
    text: '对于未来的规划，你认为最重要的是：',
    description: '请选择你最认同的观点',
    options: [
      { value: 'a', label: '事业成就', description: '追求职业发展和成功' },
      { value: 'b', label: '家庭幸福', description: '重视家庭关系和稳定' },
      { value: 'c', label: '个人成长', description: '注重自我提升和探索' },
    ],
    category: 'values',
  },
  {
    id: 'q3',
    text: '面对压力时，你通常会：',
    description: '请选择你最常采取的方式',
    options: [
      { value: 'a', label: '寻求支持', description: '向他人倾诉或寻求帮助' },
      { value: 'b', label: '自我调节', description: '通过运动或冥想等方式调节' },
      { value: 'c', label: '暂时逃避', description: '选择转移注意力或休息' },
    ],
    category: 'emotional',
  },
];

export default function QuestionCard({
  currentStep,
  answers,
  onAnswer,
}: QuestionCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentStep - 1]);

  useEffect(() => {
    setCurrentQuestion(questions[currentStep - 1]);
  }, [currentStep]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {currentQuestion.text}
        </h2>
        {currentQuestion.description && (
          <p className="text-gray-600">{currentQuestion.description}</p>
        )}
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(currentQuestion.id, option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              answers[currentQuestion.id] === option.value
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <div className="font-medium text-gray-900">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-600 mt-1">
                {option.description}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 