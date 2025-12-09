import { useState } from 'react';
import { Lightbulb, BookOpen } from 'lucide-react';
import { TIPS_STRATEGIES } from '../data/content';

export default function TipsStrategies() {
  const [selectedTip, setSelectedTip] = useState(TIPS_STRATEGIES[0]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-yellow-500" />
          <div>
            <h1 className="text-2xl font-bold">Tips & Strategies</h1>
            <p className="text-gray-600">Chiến lược và mẹo làm bài TOEIC hiệu quả</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {TIPS_STRATEGIES.map((tip) => (
              <button
                key={tip.id}
                onClick={() => setSelectedTip(tip)}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  selectedTip.id === tip.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-xs font-medium mb-1 opacity-80">{tip.category}</div>
                <div className="font-bold text-sm">{tip.title}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-600 mb-1">{selectedTip.category}</div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTip.title}</h2>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                {selectedTip.content.map((paragraph, idx) => {
                  // Check if it's a bold header
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    const text = paragraph.replace(/\*\*/g, '');
                    return (
                      <h3 key={idx} className="text-lg font-bold text-gray-900 mt-6 mb-3">
                        {text}
                      </h3>
                    );
                  }
                  
                  // Check if it's a list item
                  if (paragraph.startsWith('- ')) {
                    const text = paragraph.substring(2);
                    // Check if it has bold parts
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return (
                      <li key={idx} className="ml-6 mb-2 text-gray-700 leading-relaxed">
                        {parts.map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
                          }
                          return part;
                        })}
                      </li>
                    );
                  }

                  // Regular paragraph
                  if (paragraph.trim() === '') {
                    return <div key={idx} className="h-4" />;
                  }

                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={idx} className="mb-3 text-gray-700 leading-relaxed">
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i} className="font-bold text-gray-900">{part.replace(/\*\*/g, '')}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
