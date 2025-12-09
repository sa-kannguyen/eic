export interface User {
  id: string;
  name: string;
  email: string;
  currentLevel: ToeicLevel;
  targetScore: number;
}

export type ToeicLevel = 'beginner' | 'intermediate' | 'advanced';

export interface LevelInfo {
  id: ToeicLevel;
  name: string;
  scoreRange: string;
  description: string;
  color: string;
  bgColor: string;
  targetScore: number;
  duration: string;
}

export interface Lesson {
  id: string;
  level: ToeicLevel;
  type: 'vocabulary' | 'grammar';
  title: string;
  description: string;
  completed: boolean;
  progress: number;
}

export interface VocabularyItem {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  level: ToeicLevel;
  topic: string;
}

export interface GrammarLesson {
  id: string;
  level: ToeicLevel;
  title: string;
  description: string;
  content: string;
  examples: {
    english: string;
    vietnamese: string;
  }[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TestQuestion {
  id: string;
  part: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl?: string;
  audioUrl?: string;
}

export interface TestResult {
  id: string;
  date: Date;
  level: ToeicLevel;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  listeningScore: number;
  readingScore: number;
  timeSpent: number;
}

export interface UserProgress {
  vocabularyMastered: number;
  grammarCompleted: number;
  practiceTests: number;
  studyStreak: number;
  totalStudyTime: number;
  weeklyProgress: {
    day: string;
    minutes: number;
  }[];
}

export interface Part1Question {
  id: string;
  level: ToeicLevel;
  imageDescription: string;
  imageUrl?: string;
  options: {
    id: string;
    text: string;
    audio?: string;
  }[];
  correctAnswer: string;
  explanation: string;
  category: 'person' | 'object' | 'scene' | 'action';
}
