import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ToeicLevel, UserProgress, TestResult } from '@/types';

interface AppState {
  currentLevel: ToeicLevel;
  userProgress: UserProgress;
  testResults: TestResult[];
  completedLessons: Set<string>;
  masteredVocabulary: Set<string>;
  learnedWords: Set<string>;
  
  setCurrentLevel: (level: ToeicLevel) => void;
  updateProgress: (progress: Partial<UserProgress>) => void;
  addTestResult: (result: TestResult) => void;
  completeLesson: (lessonId: string) => void;
  masterVocabulary: (vocabId: string) => void;
  toggleLearnedWord: (wordId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentLevel: 'beginner',
      userProgress: {
        vocabularyMastered: 0,
        grammarCompleted: 0,
        practiceTests: 0,
        studyStreak: 0,
        totalStudyTime: 0,
        weeklyProgress: [
          { day: 'T2', minutes: 0 },
          { day: 'T3', minutes: 0 },
          { day: 'T4', minutes: 0 },
          { day: 'T5', minutes: 0 },
          { day: 'T6', minutes: 0 },
          { day: 'T7', minutes: 0 },
          { day: 'CN', minutes: 0 },
        ],
      },
      testResults: [],
      completedLessons: new Set(),
      masteredVocabulary: new Set(),
      learnedWords: new Set(),

      setCurrentLevel: (level) => set({ currentLevel: level }),
      
      updateProgress: (progress) =>
        set((state) => ({
          userProgress: { ...state.userProgress, ...progress },
        })),
      
      addTestResult: (result) =>
        set((state) => ({
          testResults: [...state.testResults, result],
        })),
      
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: new Set(state.completedLessons).add(lessonId),
        })),
      
      masterVocabulary: (vocabId) =>
        set((state) => ({
          masteredVocabulary: new Set(state.masteredVocabulary).add(vocabId),
          userProgress: {
            ...state.userProgress,
            vocabularyMastered: state.userProgress.vocabularyMastered + 1,
          },
        })),
      
      toggleLearnedWord: (wordId) =>
        set((state) => {
          const newLearnedWords = new Set(state.learnedWords);
          if (newLearnedWords.has(wordId)) {
            newLearnedWords.delete(wordId);
          } else {
            newLearnedWords.add(wordId);
          }
          return { learnedWords: newLearnedWords };
        }),
    }),
    {
      name: 'toeic-app-storage',
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const { state } = JSON.parse(str);
          return {
            state: {
              ...state,
              completedLessons: new Set(state.completedLessons || []),
              masteredVocabulary: new Set(state.masteredVocabulary || []),
              learnedWords: new Set(state.learnedWords || []),
            },
          };
        },
        setItem: (name, value) => {
          const str = JSON.stringify({
            state: {
              ...value.state,
              completedLessons: Array.from(value.state.completedLessons),
              masteredVocabulary: Array.from(value.state.masteredVocabulary),
              learnedWords: Array.from(value.state.learnedWords),
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
