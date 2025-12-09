import { useState, useMemo } from 'react';
import { BookOpen, CheckCircle, XCircle, Filter, RotateCcw } from 'lucide-react';
import { PART5_DATABASE } from '../data/content';
import { useAppStore } from '../store/useAppStore';

export default function Part5Practice() {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const { updateProgress } = useAppStore();

  const filteredQuestions = useMemo(() => {
    if (selectedLevel === 'all') return PART5_DATABASE;
    return PART5_DATABASE.filter(q => q.level === selectedLevel);
  }, [selectedLevel]);

  const currentQuestion = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;
  const correctAnswers = useMemo(() => {
    return Array.from(answeredQuestions).filter(id => {
      const q = PART5_DATABASE.find(question => question.id === id);
      const answerIndex = parseInt(id.split('_').pop() || '0');
      return q && answerIndex === q.correctAnswer;
    }).length;
  }, [answeredQuestions]);

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    setAnsweredQuestions(prev => new Set(prev).add(`${currentQuestion.id}_${selectedAnswer}`));

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      updateProgress({
        practiceTests: 1,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnsweredQuestions(new Set());
  };

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Part 5 Practice</h1>
              <p className="text-gray-600">Incomplete Sentences</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex gap-2">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setSelectedLevel(level as any);
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-600">
            Question <span className="font-bold text-blue-600">{currentIndex + 1}</span> of {totalQuestions}
          </div>
          <div className="text-sm text-gray-600">
            Correct: <span className="font-bold text-green-600">{correctAnswers}</span> / {answeredQuestions.size}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {currentQuestion.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentQuestion.level === 'beginner' ? 'bg-green-100 text-green-700' :
              currentQuestion.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {currentQuestion.level}
            </span>
          </div>
          <p className="text-lg text-gray-900 mb-6 leading-relaxed">
            {currentQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const showCorrect = showExplanation && isCorrectAnswer;
              const showWrong = showExplanation && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50'
                      : showWrong
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">
                      <span className="font-bold mr-2">({String.fromCharCode(65 + index)})</span>
                      {option}
                    </span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div>
                <h3 className={`font-bold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentIndex === totalQuestions - 1}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {currentIndex === totalQuestions - 1 ? 'Completed!' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
