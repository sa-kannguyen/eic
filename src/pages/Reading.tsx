import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, CheckCircle, XCircle, Eye, EyeOff, Tag, BarChart2 } from 'lucide-react';
import { READING_PASSAGES } from '@/data/readingPassages';
import { ToeicLevel, ReadingPassage } from '@/types';

const LEVEL_LABELS: Record<ToeicLevel, string> = {
  beginner: 'Sơ cấp',
  intermediate: 'Trung cấp',
  advanced: 'Cao cấp',
};

const LEVEL_COLORS: Record<ToeicLevel, { badge: string; border: string; bg: string }> = {
  beginner: { badge: 'bg-green-100 text-green-700', border: 'border-green-300', bg: 'bg-green-50' },
  intermediate: { badge: 'bg-blue-100 text-blue-700', border: 'border-blue-300', bg: 'bg-blue-50' },
  advanced: { badge: 'bg-purple-100 text-purple-700', border: 'border-purple-300', bg: 'bg-purple-50' },
};

function PassageCard({ passage, onClick }: { passage: ReadingPassage; onClick: () => void }) {
  const colors = LEVEL_COLORS[passage.level];
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-200 p-5 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${colors.badge}`}>
              {LEVEL_LABELS[passage.level]}
            </span>
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
              <Tag className="h-3 w-3 mr-1" />
              {passage.topic}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
            {passage.title}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">{passage.titleVi}</p>
        </div>
        <div className="flex-shrink-0 text-gray-400 group-hover:text-primary-500 transition-colors mt-1">
          <BookOpen className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
        <span>{passage.vocabulary.length} từ vựng</span>
        <span>{passage.questions.length} câu hỏi</span>
      </div>
    </button>
  );
}

function PassageReader({ passage, onBack }: { passage: ReadingPassage; onBack: () => void }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showVocab, setShowVocab] = useState(true);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const colors = LEVEL_COLORS[passage.level];

  const handleSelect = (qId: string, idx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: idx }));
  };

  const allAnswered = passage.questions.every((q) => answers[q.id] !== undefined && answers[q.id] !== null);
  const correctCount = submitted
    ? passage.questions.filter((q) => answers[q.id] === q.correctAnswer).length
    : 0;

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back button & title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1"
        >
          ← Quay lại danh sách
        </button>
      </div>

      <div className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-6`}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}>
            {LEVEL_LABELS[passage.level]}
          </span>
          <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-white text-gray-600 border border-gray-200">
            <Tag className="h-3 w-3 mr-1" />
            {passage.topic}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{passage.title}</h1>
        <p className="text-gray-500 mt-1 italic">{passage.titleVi}</p>
      </div>

      {/* English passage */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary-500" />
            Bài đọc tiếng Anh
          </h2>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 transition-colors font-medium"
          >
            {showTranslation ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showTranslation ? 'Ẩn bản dịch' : 'Xem bản dịch'}
          </button>
        </div>

        <div className="space-y-4">
          {passage.content.split('\n\n').map((para, i) => (
            <div key={i}>
              <p className="text-gray-800 leading-relaxed">{para}</p>
              {showTranslation && (
                <p className="text-gray-500 text-sm leading-relaxed mt-1 pl-3 border-l-2 border-primary-200 italic">
                  {passage.translation.split('\n\n')[i]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => setShowVocab(!showVocab)}
          className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
        >
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-amber-500" />
            Từ vựng nổi bật ({passage.vocabulary.length} từ)
          </h2>
          {showVocab ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </button>

        {showVocab && (
          <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {passage.vocabulary.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                <span className="font-semibold text-amber-800 shrink-0">{item.word}</span>
                <span className="text-gray-500 text-sm">— {item.meaning}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comprehension questions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-gray-800">
            Câu hỏi kiểm tra ({passage.questions.length} câu)
          </h2>
          {submitted && (
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                correctCount === passage.questions.length
                  ? 'bg-green-100 text-green-700'
                  : correctCount >= passage.questions.length / 2
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {correctCount}/{passage.questions.length} đúng
            </span>
          )}
        </div>

        <div className="space-y-6">
          {passage.questions.map((q, qi) => {
            const selected = answers[q.id] ?? null;
            const isCorrect = selected === q.correctAnswer;
            return (
              <div key={q.id} className="space-y-2">
                <p className="font-medium text-gray-800">
                  <span className="text-primary-600 font-bold mr-1">{qi + 1}.</span>
                  {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    let btnClass =
                      'w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all duration-150 ';
                    if (!submitted) {
                      btnClass +=
                        selected === oi
                          ? 'border-primary-400 bg-primary-50 text-primary-800 font-medium'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-primary-300 hover:bg-primary-50';
                    } else {
                      if (oi === q.correctAnswer) {
                        btnClass += 'border-green-400 bg-green-50 text-green-800 font-medium';
                      } else if (selected === oi && !isCorrect) {
                        btnClass += 'border-red-400 bg-red-50 text-red-800';
                      } else {
                        btnClass += 'border-gray-200 bg-gray-50 text-gray-400';
                      }
                    }

                    return (
                      <button key={oi} className={btnClass} onClick={() => handleSelect(q.id, oi)}>
                        <span className="flex items-center gap-2">
                          {submitted && oi === q.correctAnswer && (
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          )}
                          {submitted && selected === oi && !isCorrect && (
                            <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                          )}
                          <span className="font-medium mr-1">{String.fromCharCode(65 + oi)}.</span>
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div className="mt-1 text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 italic">
                    💡 {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex gap-3">
          {!submitted ? (
            <button
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="px-5 py-2.5 rounded-lg bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Nộp bài
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              Làm lại
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Reading() {
  const [selectedLevel, setSelectedLevel] = useState<ToeicLevel | 'all'>('all');
  const [selectedPassage, setSelectedPassage] = useState<ReadingPassage | null>(null);

  const filtered =
    selectedLevel === 'all'
      ? READING_PASSAGES
      : READING_PASSAGES.filter((p) => p.level === selectedLevel);

  const counts = {
    all: READING_PASSAGES.length,
    beginner: READING_PASSAGES.filter((p) => p.level === 'beginner').length,
    intermediate: READING_PASSAGES.filter((p) => p.level === 'intermediate').length,
    advanced: READING_PASSAGES.filter((p) => p.level === 'advanced').length,
  };

  if (selectedPassage) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PassageReader passage={selectedPassage} onBack={() => setSelectedPassage(null)} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Luyện Đọc Song Ngữ</h1>
        <p className="text-gray-500 mt-1">
          Bài đọc tiếng Anh – Việt theo chủ đề môi trường công ty outsource phần mềm
        </p>
      </div>

      {/* Level filter */}
      <div className="flex flex-wrap gap-2">
        {(
          [
            { key: 'all', label: 'Tất cả', count: counts.all, cls: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
            { key: 'beginner', label: 'Sơ cấp', count: counts.beginner, cls: 'bg-green-100 text-green-700 hover:bg-green-200' },
            { key: 'intermediate', label: 'Trung cấp', count: counts.intermediate, cls: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
            { key: 'advanced', label: 'Cao cấp', count: counts.advanced, cls: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
          ] as const
        ).map(({ key, label, count, cls }) => (
          <button
            key={key}
            onClick={() => setSelectedLevel(key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${cls} ${
              selectedLevel === key ? 'ring-2 ring-offset-1 ring-current' : ''
            }`}
          >
            {label}
            <span className="bg-white bg-opacity-60 rounded-full px-1.5 py-0.5 text-xs font-semibold">
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Passage grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((passage) => (
          <PassageCard key={passage.id} passage={passage} onClick={() => setSelectedPassage(passage)} />
        ))}
      </div>
    </div>
  );
}
