import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Volume2, X, CheckCircle2, Circle } from 'lucide-react';
import { VOCABULARY_DATABASE } from '../data/content';
import { useAppStore } from '../store/useAppStore';

const VocabularyList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedWord, setSelectedWord] = useState<typeof VOCABULARY_DATABASE[0] | null>(null);
  
  const { learnedWords, toggleLearnedWord } = useAppStore();

  // Get unique topics
  const topics = useMemo(() => {
    const uniqueTopics = new Set(VOCABULARY_DATABASE.map(v => v.topic));
    return Array.from(uniqueTopics).sort();
  }, []);

  // Filter vocabulary
  const filteredVocabulary = useMemo(() => {
    return VOCABULARY_DATABASE.filter(vocab => {
      const matchesSearch = 
        vocab.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vocab.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vocab.pronunciation.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = selectedLevel === 'all' || vocab.level === selectedLevel;
      const matchesTopic = selectedTopic === 'all' || vocab.topic === selectedTopic;

      return matchesSearch && matchesLevel && matchesTopic;
    });
  }, [searchTerm, selectedLevel, selectedTopic]);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Beginner (0-300)';
      case 'intermediate':
        return 'Intermediate (300-600)';
      case 'advanced':
        return 'Advanced (600-800)';
      default:
        return level;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            Vocabulary List
          </h1>
          <p className="text-gray-600">
            Complete collection of 1,500 TOEIC vocabulary words
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by word, meaning, or pronunciation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner (0-300)</option>
              <option value="intermediate">Intermediate (300-600)</option>
              <option value="advanced">Advanced (600-800)</option>
            </select>

            {/* Topic Filter */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredVocabulary.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{VOCABULARY_DATABASE.length}</span> words
          </div>
        </div>

        {/* Vocabulary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVocabulary.map((vocab) => {
            const isLearned = learnedWords.has(vocab.id);
            return (
              <div
                key={vocab.id}
                onClick={() => setSelectedWord(vocab)}
                className={`rounded-lg shadow-sm p-4 hover:shadow-md transition-all cursor-pointer border ${
                  isLearned
                    ? 'bg-green-50 border-green-300 hover:border-green-400'
                    : 'bg-white border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-lg font-bold ${isLearned ? 'text-green-900' : 'text-gray-900'}`}>
                        {vocab.word}
                      </h3>
                      {isLearned && (
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                    <p className={`text-sm ${isLearned ? 'text-green-700' : 'text-gray-500'}`}>
                      {vocab.pronunciation}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(vocab.word);
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      isLearned
                        ? 'hover:bg-green-100 text-green-600'
                        : 'hover:bg-gray-100 text-indigo-600'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(vocab.level)}`}>
                    {vocab.level}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isLearned ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {vocab.topic}
                  </span>
                </div>

                <p className={`text-sm mb-2 ${isLearned ? 'text-green-800' : 'text-gray-600'}`}>
                  <span className={`font-medium ${isLearned ? 'text-green-900' : 'text-gray-700'}`}>
                    {vocab.partOfSpeech}
                  </span> - {vocab.meaning}
                </p>

                <p className={`text-xs italic line-clamp-2 ${isLearned ? 'text-green-600' : 'text-gray-500'}`}>
                  {vocab.example}
                </p>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredVocabulary.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No vocabulary found</p>
            <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedWord.word}</h2>
                  <button
                    onClick={() => handleSpeak(selectedWord.word)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-indigo-600" />
                  </button>
                </div>
                <p className="text-lg text-gray-600">{selectedWord.pronunciation}</p>
              </div>
              <button
                onClick={() => setSelectedWord(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor(selectedWord.level)}`}>
                  {getLevelLabel(selectedWord.level)}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {selectedWord.topic}
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  {selectedWord.partOfSpeech}
                </span>
              </div>

              {/* Meaning */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Meaning
                </h3>
                <p className="text-xl text-gray-900">{selectedWord.meaning}</p>
              </div>

              {/* Example */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Example
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-semibold">EN:</span>
                    <p className="text-gray-900 flex-1">{selectedWord.example}</p>
                    <button
                      onClick={() => handleSpeak(selectedWord.example)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                    >
                      <Volume2 className="w-4 h-4 text-indigo-600" />
                    </button>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-semibold">VI:</span>
                    <p className="text-gray-700 flex-1">{selectedWord.exampleTranslation}</p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500">Word ID</p>
                  <p className="font-mono text-sm text-gray-900">{selectedWord.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="text-sm text-gray-900">{getLevelLabel(selectedWord.level)}</p>
                </div>
              </div>

              {/* Mark as Learned */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => toggleLearnedWord(selectedWord.id)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                    learnedWords.has(selectedWord.id)
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {learnedWords.has(selectedWord.id) ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Đã thuộc từ này</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-5 h-5" />
                      <span>Đánh dấu đã thuộc</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedWord(null)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyList;
