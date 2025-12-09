import { useState } from 'react';
import { Calendar, Target, CheckCircle } from 'lucide-react';
import { STUDY_PLANS } from '../data/content';

export default function StudyPlans() {
  const [selectedPlan, setSelectedPlan] = useState(STUDY_PLANS[0]);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold">Lộ trình học tập TOEIC</h1>
            <p className="text-gray-600">Chọn lộ trình phù hợp với trình độ của bạn</p>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {STUDY_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`p-6 rounded-lg border-2 text-left transition-all ${
                selectedPlan.id === plan.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                plan.level === 'beginner' ? 'bg-green-100 text-green-700' :
                plan.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {plan.level.toUpperCase()}
              </div>
              <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{plan.duration} ngày</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>Mục tiêu: {plan.targetScore} điểm</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">{selectedPlan.title}</h2>
          <p className="text-gray-700 mb-6">{selectedPlan.description}</p>

          {/* Weeks */}
          <div className="space-y-4">
            {selectedPlan.weeks.map((week) => (
              <div key={week.week} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">
                        Tuần {week.week}: {week.focus}
                      </h3>
                      <p className="text-sm text-gray-600">{week.days.length} ngày học</p>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        expandedWeek === week.week ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedWeek === week.week && (
                  <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <div className="space-y-3">
                      {week.days.map((day) => (
                        <div key={day.day} className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">Ngày {day.day}</h4>
                          <ul className="space-y-2">
                            {day.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
