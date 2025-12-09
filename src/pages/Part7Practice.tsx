import { useState } from 'react';
import { FileText, CheckCircle, XCircle } from 'lucide-react';
import { PART7_DATABASE } from '../data/content';

export default function Part7Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentPassage = PART7_DATABASE[currentIndex];

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentIndex < PART7_DATABASE.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswers({});
      setShowResults(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold">Part 7 Practice</h1>
            <p className="text-gray-600">Reading Comprehension</p>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Passage {currentIndex + 1} of {PART7_DATABASE.length}
            </span>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentPassage.level === 'beginner' ? 'bg-green-100 text-green-700' :
                currentPassage.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {currentPassage.level}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {currentPassage.type}
              </span>
            </div>
          </div>
        </div>

        {/* Passages */}
        <div className="space-y-6 mb-8">
          {currentPassage.passages.map((passage, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
              {passage.title && (
                <h3 className="font-bold text-lg mb-4 text-gray-900">{passage.title}</h3>
              )}
              <div className="prose prose-sm max-w-none">
                {passage.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 text-gray-800 leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-8">
          <h3 className="font-bold text-xl text-gray-900">Questions:</h3>
          {currentPassage.questions.map((question, qIdx) => (
            <div key={question.id} className="border-2 border-gray-200 rounded-lg p-6">
              <p className="font-medium text-gray-900 mb-4">
                {qIdx + 1}. {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, optIdx) => {
                  const isSelected = answers[question.id] === optIdx;
                  const isCorrect = optIdx === question.correctAnswer;
                  const showCorrect = showResults && isCorrect;
                  const showWrong = showResults && isSelected && !isCorrect;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswerSelect(question.id, optIdx)}
                      disabled={showResults}
                      className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                        showCorrect ? 'border-green-500 bg-green-50' :
                        showWrong ? 'border-red-500 bg-red-50' :
                        isSelected ? 'border-blue-500 bg-blue-50' :
                        'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>({String.fromCharCode(65 + optIdx)}) {option}</span>
                        {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {showResults && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700"><strong>Explanation:</strong> {question.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== currentPassage.questions.length}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
            >
              Submit Answers
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentIndex === PART7_DATABASE.length - 1}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
            >
              {currentIndex === PART7_DATABASE.length - 1 ? 'Completed!' : 'Next Passage'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
