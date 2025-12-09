import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Volume2, CheckCircle, XCircle, Image as ImageIcon, Award, RotateCcw } from 'lucide-react';
import { PART1_QUESTIONS } from '../data/content';
import { ToeicLevel } from '../types';

const Part1Practice: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showSummary, setShowSummary] = useState(false);

  // Filter questions by level
  const questions = useMemo(() => {
    return PART1_QUESTIONS.filter(q => q.level === (level as ToeicLevel));
  }, [level]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Calculate score
  const correctAnswers = useMemo(() => {
    return Object.entries(answers).filter(([index, answer]) => {
      return questions[parseInt(index)]?.correctAnswer === answer;
    }).length;
  }, [answers, questions]);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswerSelect = (optionId: string) => {
    if (!showResult) {
      setSelectedAnswer(optionId);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer) {
      setShowResult(true);
      setAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: selectedAnswer
      }));
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowSummary(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || null);
      setShowResult(!!answers[currentQuestionIndex - 1]);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers({});
    setShowSummary(false);
  };

  const getLevelColor = (lvl: string) => {
    switch (lvl) {
      case 'beginner':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-blue-500';
      case 'advanced':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelName = (lvl: string) => {
    switch (lvl) {
      case 'beginner':
        return 'Beginner (0-300)';
      case 'intermediate':
        return 'Intermediate (300-600)';
      case 'advanced':
        return 'Advanced (600-800)';
      default:
        return lvl;
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/practice" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Practice
          </Link>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No questions available for this level.</p>
          </div>
        </div>
      </div>
    );
  }

  if (showSummary) {
    const scorePercentage = Math.round((correctAnswers / questions.length) * 100);
    const passed = scorePercentage >= 70;

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                passed ? 'bg-green-100' : 'bg-orange-100'
              }`}>
                <Award className={`w-10 h-10 ${passed ? 'text-green-600' : 'text-orange-600'}`} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? 'Congratulations! 🎉' : 'Keep Practicing! 💪'}
              </h1>
              <p className="text-gray-600">Part 1 Practice - {getLevelName(level || '')}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Questions</p>
                <p className="text-3xl font-bold text-gray-900">{questions.length}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Correct</p>
                <p className="text-3xl font-bold text-green-600">{correctAnswers}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Score</p>
                <p className="text-3xl font-bold text-indigo-600">{scorePercentage}%</p>
              </div>
            </div>

            {/* Performance Message */}
            <div className={`rounded-lg p-4 mb-6 ${
              passed ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
            }`}>
              <p className={`text-sm ${passed ? 'text-green-800' : 'text-orange-800'}`}>
                {passed 
                  ? '✨ Excellent work! You have a strong understanding of Part 1.'
                  : '📚 Review the explanations and try again to improve your score.'}
              </p>
            </div>

            {/* Detailed Results */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Results</h3>
              <div className="space-y-3">
                {questions.map((q, index) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div key={q.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                      isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-center gap-3">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="text-sm font-medium text-gray-900">
                          Question {index + 1}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {userAnswer ? (
                          <>
                            Your answer: <span className="font-semibold">{userAnswer}</span>
                            {!isCorrect && (
                              <> | Correct: <span className="font-semibold text-green-600">{q.correctAnswer}</span></>
                            )}
                          </>
                        ) : (
                          <span className="text-gray-400">Not answered</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
              <Link
                to="/practice"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link to="/practice" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-4">
            <ArrowLeft className="w-5 h-5" />
            Back to Practice
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">TOEIC Part 1 Practice</h1>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getLevelColor(level || '')}`}>
                  {getLevelName(level || '')}
                </span>
                <span className="text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-indigo-600">
                {Object.keys(answers).length}/{questions.length}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {/* Image Section */}
          <div className="bg-gray-100 p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 italic mb-2">Image Description:</p>
              <p className="text-lg font-medium text-gray-900">{currentQuestion.imageDescription}</p>
              <p className="text-sm text-gray-500 mt-4">
                Category: <span className="font-semibold capitalize">{currentQuestion.category}</span>
              </p>
            </div>
          </div>

          {/* Options Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Choose the statement that best describes the image:
              </h3>
              <button
                onClick={() => handleSpeak(currentQuestion.imageDescription)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Listen to description"
              >
                <Volume2 className="w-5 h-5 text-indigo-600" />
              </button>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctAnswer;
                const showCorrectAnswer = showResult && isCorrect;
                const showWrongAnswer = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrectAnswer
                        ? 'border-green-500 bg-green-50'
                        : showWrongAnswer
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 flex items-start gap-3">
                        <span className={`font-bold text-lg ${
                          showCorrectAnswer ? 'text-green-700' :
                          showWrongAnswer ? 'text-red-700' :
                          isSelected ? 'text-indigo-700' : 'text-gray-700'
                        }`}>
                          {option.id}.
                        </span>
                        <span className={`text-base ${
                          showCorrectAnswer ? 'text-green-900 font-medium' :
                          showWrongAnswer ? 'text-red-900' :
                          'text-gray-900'
                        }`}>
                          {option.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpeak(option.text);
                          }}
                          className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Volume2 className="w-4 h-4 text-gray-600" />
                        </button>
                        {showCorrectAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {showWrongAnswer && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-orange-50 border border-orange-200'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'text-green-900'
                    : 'text-orange-900'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
                </h4>
                <p className={`text-sm ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? 'text-green-800'
                    : 'text-orange-800'
                }`}>
                  <span className="font-semibold">Explanation:</span> {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {!showResult ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedAnswer}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              {isLastQuestion ? 'Show Results' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Part1Practice;
