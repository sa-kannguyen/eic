import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { VOCABULARY_DATABASE } from '@/data/content';
import { useAppStore } from '@/store/useAppStore';
import { Volume2, Check, BookOpen, Filter } from 'lucide-react';

export default function Vocabulary() {
  const { level } = useParams<{ level: string }>();
  const { masteredVocabulary, masterVocabulary } = useAppStore();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const vocabularyList = VOCABULARY_DATABASE.filter(v => v.level === level);
  const topics = ['all', ...new Set(vocabularyList.map(v => v.topic))];
  
  const filteredVocabulary = selectedTopic === 'all' 
    ? vocabularyList 
    : vocabularyList.filter(v => v.topic === selectedTopic);

  const currentWord = filteredVocabulary[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredVocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleMaster = () => {
    if (currentWord && !masteredVocabulary.has(currentWord.id)) {
      masterVocabulary(currentWord.id);
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!currentWord) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Không tìm thấy từ vựng cho cấp độ này.</p>
      </div>
    );
  }

  const masteredCount = filteredVocabulary.filter(v => masteredVocabulary.has(v.id)).length;
  const progress = (masteredCount / filteredVocabulary.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Học từ vựng</h1>
        <p className="text-gray-600">
          Cấp độ: {level === 'beginner' ? 'Sơ cấp' : level === 'intermediate' ? 'Trung cấp' : 'Cao cấp'}
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Tiến độ học</span>
          <span className="text-sm font-medium text-primary-600">
            {masteredCount}/{filteredVocabulary.length} từ
          </span>
        </div>
        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-primary-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Topic Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Filter className="h-5 w-5 text-gray-600" />
          <span className="font-medium text-gray-700">Lọc theo chủ đề:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setCurrentIndex(0);
                setShowAnswer(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTopic === topic
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {topic === 'all' ? 'Tất cả' : topic}
            </button>
          ))}
        </div>
      </div>

      {/* Flashcard */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-6">
          <div className="inline-block bg-primary-50 px-3 py-1 rounded-full text-sm text-primary-700 font-medium mb-4">
            {currentWord.topic}
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-3">{currentWord.word}</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-gray-500">{currentWord.pronunciation}</span>
            <button
              onClick={() => speak(currentWord.word)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="Phát âm"
            >
              <Volume2 className="h-5 w-5 text-primary-600" />
            </button>
          </div>
          <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
            {currentWord.partOfSpeech}
          </span>
        </div>

        {showAnswer ? (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nghĩa:</h3>
              <p className="text-lg text-gray-700">{currentWord.meaning}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ví dụ:</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-800 mb-2 italic">"{currentWord.example}"</p>
                <p className="text-gray-600">→ {currentWord.exampleTranslation}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <button
                onClick={handleMaster}
                disabled={masteredVocabulary.has(currentWord.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  masteredVocabulary.has(currentWord.id)
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                <Check className="h-5 w-5" />
                <span>{masteredVocabulary.has(currentWord.id) ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <button
              onClick={() => setShowAnswer(true)}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Xem nghĩa & ví dụ
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Trước
          </button>

          <span className="text-gray-600 font-medium">
            {currentIndex + 1} / {filteredVocabulary.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === filteredVocabulary.length - 1}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Tiếp →
          </button>
        </div>
      </div>
    </div>
  );
}
