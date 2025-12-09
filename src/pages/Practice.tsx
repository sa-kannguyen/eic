import { Link } from 'react-router-dom';
import { Image, MessageCircle, BookOpen, PlayCircle } from 'lucide-react';

export default function Practice() {
  const parts = [
    {
      id: 'part1',
      title: 'Part 1: Photographs',
      description: 'Mô tả hình ảnh - 6 câu',
      icon: Image,
      color: 'blue',
      levels: ['beginner', 'intermediate', 'advanced'],
      available: true,
    },
    {
      id: 'part2',
      title: 'Part 2: Question-Response',
      description: 'Hỏi đáp - 25 câu',
      icon: MessageCircle,
      color: 'green',
      levels: ['beginner', 'intermediate', 'advanced'],
      available: false,
    },
    {
      id: 'part5',
      title: 'Part 5: Incomplete Sentences',
      description: 'Hoàn thành câu - 30 câu',
      icon: BookOpen,
      color: 'purple',
      levels: ['beginner', 'intermediate', 'advanced'],
      available: false,
    },
    {
      id: 'part7',
      title: 'Part 7: Reading Comprehension',
      description: 'Đọc hiểu - 54 câu',
      icon: BookOpen,
      color: 'orange',
      levels: ['beginner', 'intermediate', 'advanced'],
      available: false,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { border: string; bg: string; text: string; button: string } } = {
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
      },
      green: {
        border: 'border-green-500',
        bg: 'bg-green-50',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700',
      },
      orange: {
        border: 'border-orange-500',
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        button: 'bg-orange-600 hover:bg-orange-700',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TOEIC Practice</h1>
        <p className="text-gray-600">
          Luyện tập theo từng phần của bài thi TOEIC. Chọn Part và Level phù hợp với trình độ của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {parts.map((part) => {
          const colors = getColorClasses(part.color);
          const Icon = part.icon;

          return (
            <div
              key={part.id}
              className={`border-l-4 ${colors.border} ${colors.bg} rounded-lg p-6 shadow-sm`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${colors.text} bg-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{part.title}</h3>
                  <p className="text-gray-600 text-sm">{part.description}</p>
                </div>
              </div>

              {part.available ? (
                <>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Choose your level:</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {part.levels.map((level) => (
                      <Link
                        key={level}
                        to={`/practice/${part.id}/${level}`}
                        className={`${colors.button} text-white text-center py-2 px-3 rounded-lg transition-colors text-sm font-medium`}
                      >
                        {level === 'beginner' && 'Beginner'}
                        {level === 'intermediate' && 'Intermediate'}
                        {level === 'advanced' && 'Advanced'}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm mb-3">Coming soon...</p>
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed"
                  >
                    Not Available Yet
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <PlayCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-indigo-900 mb-2">Practice Tips</h3>
            <ul className="space-y-1 text-sm text-indigo-800">
              <li>• Bắt đầu với level phù hợp với trình độ hiện tại của bạn</li>
              <li>• Làm bài trong điều kiện giống thi thật để quen với áp lực thời gian</li>
              <li>• Xem kỹ giải thích sau mỗi câu để hiểu rõ lý do đúng/sai</li>
              <li>• Luyện tập đều đặn mỗi ngày sẽ cho kết quả tốt hơn luyện tập dồn dập</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
