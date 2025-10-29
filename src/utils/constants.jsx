export const QUIZ_STATES = {
  CATEGORY: "category",
  DIFFICULTY: "difficulty",
  PLAYING: "playing",
  RESULTS: "results",
};

export const QUESTION_STATUS = {
  UNANSWERED: "unanswered",
  CORRECT: "correct",
  INCORRECT: "incorrect",
  CURRENT: "current",
};

export const LOCAL_STORAGE_KEYS = {
  QUIZ_HISTORY: "quizHistory",
  USER_PREFERENCES: "userPreferences",
};

export const TIME_LIMITS = {
  EASY: 30,
  MEDIUM: 25,
  HARD: 20,
};

export const DIFFICULTY_CONFIG = {
  easy: { color: "green", timeMultiplier: 1, pointsMultiplier: 1 },
  medium: { color: "yellow", timeMultiplier: 0.8, pointsMultiplier: 1.5 },
  hard: { color: "red", timeMultiplier: 0.6, pointsMultiplier: 2 },
};
