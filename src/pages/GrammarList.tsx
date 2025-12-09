import { useState, useMemo } from 'react';
import { Search, BookOpen, Filter, X, CheckCircle2, Volume2 } from 'lucide-react';
import { GRAMMAR_DATABASE } from '../data/content';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface GrammarItem {
  id: string;
  level: string;
  title: string;
  description: string;
  content: string;
  examples: Array<{
    english: string;
    vietnamese: string;
  }>;
  exercises: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

export default function GrammarList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const [selectedGrammar, setSelectedGrammar] = useState<GrammarItem | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredGrammar = useMemo(() => {
    return GRAMMAR_DATABASE.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
      
      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Cơ bản';
      case 'intermediate':
        return 'Trung cấp';
      case 'advanced':
        return 'Nâng cao';
      default:
        return level;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Danh sách Ngữ pháp
        </h1>
        <p className="text-gray-600">
          Tổng hợp {GRAMMAR_DATABASE.length} chủ điểm ngữ pháp TOEIC
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, mô tả, hoặc chủ đề..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Level Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as Level | 'all')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Tất cả cấp độ</option>
              <option value="beginner">Cơ bản (0-300)</option>
              <option value="intermediate">Trung cấp (300-600)</option>
              <option value="advanced">Nâng cao (600-800)</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Hiển thị <span className="font-semibold text-primary-600">{filteredGrammar.length}</span> kết quả
        </div>
      </div>

      {/* Grammar List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGrammar.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedGrammar(item)}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-5 cursor-pointer hover:border-primary-500 border border-transparent"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                  {getLevelText(item.level)}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                {item.examples.length} ví dụ • {item.exercises.length} bài tập
              </span>
              <span className="text-primary-600 font-medium">Xem chi tiết →</span>
            </div>

            {/* Example Preview */}
            {item.examples.length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-700 italic line-clamp-1">
                  "{item.examples[0].english}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredGrammar.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Không tìm thấy kết quả
          </h3>
          <p className="text-gray-500">
            Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
          </p>
        </div>
      )}

      {/* Grammar Detail Modal */}
      {selectedGrammar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(selectedGrammar.level)}`}>
                    {getLevelText(selectedGrammar.level)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedGrammar.title}
                </h2>
                <p className="text-gray-600 mt-1">{selectedGrammar.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedGrammar(null);
                  setSelectedAnswers({});
                }}
                className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Grammar Content */}
              <div className="prose prose-sm max-w-none mb-8">
                <div className="bg-blue-50 border-l-4 border-primary-500 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">📚 Lý thuyết</h3>
                  <div 
                    className="text-gray-700 whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: selectedGrammar.content.replace(/\n/g, '<br/>') }}
                  />
                </div>
              </div>

              {/* Examples Section */}
              {selectedGrammar.examples.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">
                      {selectedGrammar.examples.length} Ví dụ
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {selectedGrammar.examples.map((example, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium mb-2">
                              ✓ {example.english}
                            </p>
                            <p className="text-gray-600 text-sm">
                              → {example.vietnamese}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(example.english);
                            }}
                            className="flex-shrink-0 p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                            title="Phát âm"
                          >
                            <Volume2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exercises Section */}
              {selectedGrammar.exercises.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2">
                      {selectedGrammar.exercises.length} Bài tập
                    </span>
                  </h3>
                  <div className="space-y-6">
                    {selectedGrammar.exercises.map((exercise, index) => {
                      const userAnswer = selectedAnswers[exercise.id];
                      const isAnswered = userAnswer !== undefined;
                      const isCorrect = userAnswer === exercise.correctAnswer;

                      return (
                        <div key={exercise.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                          <p className="font-medium text-gray-900 mb-4">
                            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded mr-2 text-sm">
                              Câu {index + 1}
                            </span>
                            {exercise.question}
                          </p>

                          <div className="space-y-2 mb-4">
                            {exercise.options.map((option, optionIndex) => {
                              const isSelected = userAnswer === optionIndex;
                              const isCorrectOption = optionIndex === exercise.correctAnswer;
                              
                              let bgColor = 'bg-white hover:bg-gray-50';
                              let borderColor = 'border-gray-300';
                              let textColor = 'text-gray-700';

                              if (isAnswered) {
                                if (isCorrectOption) {
                                  bgColor = 'bg-green-50';
                                  borderColor = 'border-green-500';
                                  textColor = 'text-green-900';
                                } else if (isSelected && !isCorrect) {
                                  bgColor = 'bg-red-50';
                                  borderColor = 'border-red-500';
                                  textColor = 'text-red-900';
                                }
                              } else if (isSelected) {
                                bgColor = 'bg-primary-50';
                                borderColor = 'border-primary-500';
                              }

                              return (
                                <button
                                  key={optionIndex}
                                  onClick={() => {
                                    if (!isAnswered) {
                                      setSelectedAnswers(prev => ({
                                        ...prev,
                                        [exercise.id]: optionIndex
                                      }));
                                    }
                                  }}
                                  disabled={isAnswered}
                                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${bgColor} ${borderColor} ${textColor} ${
                                    !isAnswered ? 'cursor-pointer' : 'cursor-default'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>
                                      <span className="font-medium mr-2">
                                        {String.fromCharCode(65 + optionIndex)}.
                                      </span>
                                      {option}
                                    </span>
                                    {isAnswered && isCorrectOption && (
                                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    )}
                                    {isAnswered && isSelected && !isCorrect && (
                                      <X className="h-5 w-5 text-red-600" />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {isAnswered && (
                            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                              <p className="font-semibold mb-2 flex items-center">
                                {isCorrect ? (
                                  <>
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                                    <span className="text-green-800">Chính xác!</span>
                                  </>
                                ) : (
                                  <>
                                    <X className="h-5 w-5 text-orange-600 mr-2" />
                                    <span className="text-orange-800">Chưa đúng</span>
                                  </>
                                )}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Giải thích:</strong> {exercise.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 flex justify-end">
              <button
                onClick={() => {
                  setSelectedGrammar(null);
                  setSelectedAnswers({});
                }}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
