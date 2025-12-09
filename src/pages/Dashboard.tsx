import { useAppStore } from '@/store/useAppStore';
import { LEVELS } from '@/data/content';
import { BookOpen, Clock, Award, TrendingUp, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { currentLevel, userProgress } = useAppStore();
  
  const currentLevelInfo = LEVELS.find(l => l.id === currentLevel);

  const stats = [
    {
      name: 'Từ vựng đã học',
      value: userProgress.vocabularyMastered,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Bài ngữ pháp',
      value: userProgress.grammarCompleted,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Bài kiểm tra',
      value: userProgress.practiceTests,
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Chuỗi học liên tục',
      value: `${userProgress.studyStreak} ngày`,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Chào mừng trở lại! 👋</h1>
        <p className="text-primary-100 text-lg">
          Hãy tiếp tục hành trình chinh phục TOEIC 800 điểm của bạn
        </p>
      </div>

      {/* Current Level */}
      {currentLevelInfo && (
        <div className={`${currentLevelInfo.bgColor} rounded-lg p-6 border-2 border-${currentLevelInfo.color.split('-')[1]}-200`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Target className={`h-6 w-6 ${currentLevelInfo.color}`} />
                <h2 className="text-xl font-bold text-gray-900">
                  Cấp độ hiện tại: {currentLevelInfo.name}
                </h2>
              </div>
              <p className="mt-2 text-gray-700">{currentLevelInfo.scoreRange}</p>
              <p className="mt-1 text-gray-600">{currentLevelInfo.description}</p>
              <div className="flex items-center mt-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                Thời gian dự kiến: {currentLevelInfo.duration}
              </div>
            </div>
            <div className="text-right">
              <div className={`text-4xl font-bold ${currentLevelInfo.color}`}>
                {currentLevelInfo.targetScore}
              </div>
              <div className="text-sm text-gray-600">Điểm mục tiêu</div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${stat.bgColor} rounded-lg p-3`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bắt đầu học ngay</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to={`/vocabulary/${currentLevel}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Học từ vựng</h3>
            <p className="text-gray-600 text-sm">
              Mở rộng vốn từ với các chủ đề thực tế
            </p>
          </Link>

          <Link
            to={`/grammar/${currentLevel}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500"
          >
            <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Học ngữ pháp</h3>
            <p className="text-gray-600 text-sm">
              Nắm vững các cấu trúc ngữ pháp quan trọng
            </p>
          </Link>

          <Link
            to={`/practice/${currentLevel}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500"
          >
            <Award className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Luyện tập</h3>
            <p className="text-gray-600 text-sm">
              Rèn luyện kỹ năng với bài tập thực tế
            </p>
          </Link>
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Mẹo học tập hiệu quả</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary-600 font-bold mr-2">1.</span>
            <span className="text-gray-700">
              Học đều đặn mỗi ngày ít nhất 30 phút để duy trì tiến độ
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 font-bold mr-2">2.</span>
            <span className="text-gray-700">
              Ôn lại từ vựng cũ thường xuyên để ghi nhớ lâu dài
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 font-bold mr-2">3.</span>
            <span className="text-gray-700">
              Làm bài test thử định kỳ để đánh giá tiến bộ
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 font-bold mr-2">4.</span>
            <span className="text-gray-700">
              Tập trung vào điểm yếu và luyện tập nhiều hơn ở phần đó
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
