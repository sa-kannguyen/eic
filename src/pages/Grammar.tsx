import { useParams } from 'react-router-dom';
import { GRAMMAR_DATABASE } from '@/data/content';
import { useState } from 'react';
import { Check, X, BookOpen } from 'lucide-react';

export default function Grammar() {
  const { level } = useParams<{ level: string }>();
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const lessons = GRAMMAR_DATABASE.filter(g => g.level === level);
  const currentLesson = lessons[selectedLesson];

  if (!currentLesson) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Không tìm thấy bài học ngữ pháp cho cấp độ này.</p>
      </div>
    );
  }

  const exercise = currentLesson.exercises[currentExercise];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  };

  const handleNextExercise = () => {
    if (currentExercise < currentLesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Học ngữ pháp</h1>
        <p className="text-gray-600">
          Cấp độ: {level === 'beginner' ? 'Sơ cấp' : level === 'intermediate' ? 'Trung cấp' : 'Cao cấp'}
        </p>
      </div>

      {/* Lesson Selector */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <BookOpen className="h-5 w-5 text-gray-600" />
          <span className="font-medium text-gray-700">Chọn bài học:</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => {
                setSelectedLesson(index);
                setCurrentExercise(0);
                setSelectedAnswer(null);
                setShowExplanation(false);
              }}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedLesson === index
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{currentLesson.title}</h2>
        <div className="prose max-w-none">
          <div className="text-gray-700 whitespace-pre-line">{currentLesson.content}</div>
        </div>

        {/* Examples */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ví dụ:</h3>
          <div className="space-y-3">
            {currentLesson.examples.map((example, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-800 font-medium italic">"{example.english}"</p>
                <p className="text-gray-600 mt-1">→ {example.vietnamese}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise */}
      {exercise && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Bài tập {currentExercise + 1}/{currentLesson.exercises.length}
          </h3>

          <div className="mb-6">
            <p className="text-lg text-gray-800 mb-4">{exercise.question}</p>
            <div className="space-y-3">
              {exercise.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === exercise.correctAnswer;
                const showResult = showExplanation;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showResult
                        ? isCorrect
                          ? 'border-green-500 bg-green-50'
                          : isSelected
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200'
                        : isSelected
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{option}</span>
                      {showResult && (
                        <>
                          {isCorrect && <Check className="h-5 w-5 text-green-600" />}
                          {!isCorrect && isSelected && <X className="h-5 w-5 text-red-600" />}
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Giải thích:</h4>
              <p className="text-gray-700">{exercise.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-end">
            {showExplanation && currentExercise < currentLesson.exercises.length - 1 && (
              <button
                onClick={handleNextExercise}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Câu tiếp theo →
              </button>
            )}
            {showExplanation && currentExercise === currentLesson.exercises.length - 1 && (
              <div className="text-center w-full">
                <p className="text-green-600 font-semibold text-lg mb-3">
                  🎉 Bạn đã hoàn thành tất cả bài tập!
                </p>
                {selectedLesson < lessons.length - 1 && (
                  <button
                    onClick={() => {
                      setSelectedLesson(selectedLesson + 1);
                      setCurrentExercise(0);
                      setSelectedAnswer(null);
                      setShowExplanation(false);
                    }}
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Bài học tiếp theo →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
