'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionCard from './components/QuestionCard';
import ResultDisplay from './components/ResultDisplay';
import NavigationButtons from './components/NavigationButtons';
import { AssessmentState, Question, Result } from './types';

export default function AssessmentResultPage() {
  const router = useRouter();
  const [state, setState] = useState<AssessmentState>({
    currentStep: 1,
    questions: [],
    answers: {},
    isComplete: false,
    result: null,
  });

  // 从本地存储加载状态
  useEffect(() => {
    const savedState = localStorage.getItem('assessmentState');
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);

  // 保存状态到本地存储
  useEffect(() => {
    localStorage.setItem('assessmentState', JSON.stringify(state));
  }, [state]);

  const handleAnswer = (questionId: string, answer: string) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  const handleNext = () => {
    if (state.currentStep < 3) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }));
    } else {
      // 完成测评，计算结果
      calculateResult();
    }
  };

  const handleBack = () => {
    if (state.currentStep > 1) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1,
      }));
    }
  };

  const calculateResult = () => {
    // TODO: 实现结果计算逻辑
    const result: Result = {
      overallScore: 85,
      dimensions: {
        personality: 80,
        values: 90,
        emotional: 85,
      },
      suggestions: [
        {
          category: '沟通方式',
          title: '改善沟通模式',
          description: '建议采用更开放和直接的方式表达感受',
        },
        {
          category: '情感表达',
          title: '增强情感表达',
          description: '尝试更频繁地表达爱意和关心',
        },
        {
          category: '共同成长',
          title: '制定共同目标',
          description: '一起规划未来，设定共同的生活目标',
        },
      ],
    };

    setState(prev => ({
      ...prev,
      isComplete: true,
      result,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部进度指示器 */}
      <ProgressIndicator
        currentStep={state.currentStep}
        totalSteps={3}
        isComplete={state.isComplete}
      />

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-8">
        {!state.isComplete ? (
          // 测评流程
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                第 {state.currentStep} 步：{state.currentStep === 1 ? '性格特征' : state.currentStep === 2 ? '价值观念' : '情感需求'}
              </h2>
              <p className="text-gray-600">
                请根据你的真实想法选择最符合的选项
              </p>
            </div>
            <QuestionCard
              currentStep={state.currentStep}
              answers={state.answers}
              onAnswer={handleAnswer}
            />
            <NavigationButtons
              onNext={handleNext}
              onBack={handleBack}
              isFirstStep={state.currentStep === 1}
              isLastStep={state.currentStep === 3}
            />
          </div>
        ) : (
          // 结果展示
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                测评结果分析
              </h2>
              <p className="text-gray-600">
                基于你的回答，我们为你生成了详细的分析报告
              </p>
            </div>
            <ResultDisplay result={state.result} />
            <NavigationButtons
              onNext={() => router.push('/')}
              onBack={handleBack}
              isFirstStep={false}
              isLastStep={true}
            />
          </div>
        )}
      </main>
    </div>
  );
} 