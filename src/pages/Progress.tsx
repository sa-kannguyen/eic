import { useAppStore } from '@/store/useAppStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, BookOpen, Calendar } from 'lucide-react';

export default function Progress() {
  const { userProgress, testResults } = useAppStore();

  const stats = [
    {
      name: 'Tổng thời gian học',
      value: `${userProgress.totalStudyTime} giờ`,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Chuỗi học liên tục',
      value: `${userProgress.studyStreak} ngày`,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Từ vựng đã thuộc',
      value: userProgress.vocabularyMastered,
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Bài test hoàn thành',
      value: userProgress.practiceTests,
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tiến độ học tập</h1>
        <p className="text-gray-600">Theo dõi quá trình học và cải thiện của bạn</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      {/* Weekly Activity */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Hoạt động trong tuần</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userProgress.weeklyProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="minutes" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Lịch sử bài kiểm tra</h2>
        {testResults.length === 0 ? (
          <p className="text-center text-gray-600 py-8">
            Bạn chưa hoàn thành bài kiểm tra nào. Hãy bắt đầu luyện tập!
          </p>
        ) : (
          <div className="space-y-4">
            {testResults.map((result) => (
              <div
                key={result.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {result.level === 'beginner' ? 'Sơ cấp' : result.level === 'intermediate' ? 'Trung cấp' : 'Cao cấp'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {new Date(result.date).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600">{result.score}</div>
                    <div className="text-sm text-gray-600">
                      {result.correctAnswers}/{result.totalQuestions} đúng
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
