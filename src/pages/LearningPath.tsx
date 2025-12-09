import { LEVELS } from '@/data/content';
import { useAppStore } from '@/store/useAppStore';
import { CheckCircle, Lock, Circle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearningPath() {
  const { currentLevel } = useAppStore();

  const learningSteps = [
    {
      level: 'beginner',
      modules: [
        { id: '1', name: 'Từ vựng cơ bản (200 từ)', type: 'vocabulary', link: '/vocabulary/beginner' },
        { id: '2', name: 'Ngữ pháp nền tảng', type: 'grammar', link: '/grammar/beginner' },
        { id: '3', name: 'Luyện nghe Part 1-2', type: 'practice', link: '/practice/beginner' },
        { id: '4', name: 'Luyện đọc Part 5-6', type: 'practice', link: '/practice/beginner' },
        { id: '5', name: 'Kiểm tra đầu ra', type: 'test', link: '/test/beginner' },
      ],
    },
    {
      level: 'intermediate',
      modules: [
        { id: '6', name: 'Từ vựng nâng cao (500 từ)', type: 'vocabulary', link: '/vocabulary/intermediate' },
        { id: '7', name: 'Ngữ pháp trung cấp', type: 'grammar', link: '/grammar/intermediate' },
        { id: '8', name: 'Luyện nghe Part 3-4', type: 'practice', link: '/practice/intermediate' },
        { id: '9', name: 'Luyện đọc Part 7', type: 'practice', link: '/practice/intermediate' },
        { id: '10', name: 'Kiểm tra đầu ra', type: 'test', link: '/test/intermediate' },
      ],
    },
    {
      level: 'advanced',
      modules: [
        { id: '11', name: 'Từ vựng chuyên sâu (800 từ)', type: 'vocabulary', link: '/vocabulary/advanced' },
        { id: '12', name: 'Ngữ pháp nâng cao', type: 'grammar', link: '/grammar/advanced' },
        { id: '13', name: 'Luyện nghe tổng hợp', type: 'practice', link: '/practice/advanced' },
        { id: '14', name: 'Luyện đọc chuyên sâu', type: 'practice', link: '/practice/advanced' },
        { id: '15', name: 'Thi thử TOEIC 800+', type: 'test', link: '/test/advanced' },
      ],
    },
  ];

  const getLevelIndex = (level: string) => {
    return LEVELS.findIndex(l => l.id === level);
  };

  const currentLevelIndex = getLevelIndex(currentLevel);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lộ trình học TOEIC</h1>
        <p className="text-gray-600">
          Theo dõi tiến độ học tập và hoàn thành từng giai đoạn để đạt mục tiêu 800 điểm
        </p>
      </div>

      <div className="space-y-8">
        {LEVELS.map((level, levelIndex) => {
          const isCurrentLevel = level.id === currentLevel;
          const isLocked = levelIndex > currentLevelIndex;
          const isCompleted = levelIndex < currentLevelIndex;
          const steps = learningSteps.find(s => s.level === level.id)?.modules || [];

          return (
            <div
              key={level.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                isCurrentLevel ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Level Header */}
              <div className={`${level.bgColor} p-6 border-b`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isCompleted && <CheckCircle className="h-6 w-6 text-green-600" />}
                    {isCurrentLevel && <Circle className="h-6 w-6 text-primary-600 animate-pulse" />}
                    {isLocked && <Lock className="h-6 w-6 text-gray-400" />}
                    <div>
                      <h2 className={`text-2xl font-bold ${level.color}`}>
                        {level.name}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {level.scoreRange} • {level.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${level.color}`}>
                      {level.targetScore}
                    </div>
                    <div className="text-xs text-gray-600">điểm</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{level.description}</p>
              </div>

              {/* Learning Modules */}
              <div className="p-6">
                <div className="space-y-3">
                  {steps.map((module, index) => (
                    <div key={module.id}>
                      <Link
                        to={isLocked ? '#' : module.link}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          isLocked
                            ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                        onClick={(e) => isLocked && e.preventDefault()}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                              isLocked
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-primary-100 text-primary-700'
                            } font-semibold`}
                          >
                            {index + 1}
                          </div>
                          <span
                            className={`font-medium ${
                              isLocked ? 'text-gray-400' : 'text-gray-900'
                            }`}
                          >
                            {module.name}
                          </span>
                        </div>
                        {!isLocked && (
                          <ArrowRight className="h-5 w-5 text-primary-600" />
                        )}
                        {isLocked && <Lock className="h-4 w-4 text-gray-400" />}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Level Progress */}
              {isCurrentLevel && (
                <div className="bg-primary-50 px-6 py-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-700 font-medium">
                      Bạn đang ở giai đoạn này
                    </span>
                    <span className="text-primary-600">Tiến độ: 0/{steps.length}</span>
                  </div>
                  <div className="mt-2 bg-white rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final Goal */}
      <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">🎯 Mục tiêu cuối cùng</h2>
        <p className="text-xl mb-4">Đạt 800 điểm TOEIC</p>
        <p className="text-purple-100">
          Hoàn thành tất cả 3 giai đoạn và bạn sẽ có đủ kiến thức và kỹ năng để đạt 800 điểm TOEIC!
        </p>
      </div>
    </div>
  );
}
