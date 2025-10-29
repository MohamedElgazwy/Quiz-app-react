import { useState, useMemo, useCallback } from "react";
import { quizData } from "../data/quizData";
import { QUIZ_STATES, QUESTION_STATUS, TIME_LIMITS } from "../utils/constants";

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const useQuiz = () => {
  const [quizState, setQuizState] = useState(QUIZ_STATES.CATEGORY);
  const [selectedCategory, setSelectedCategoryState] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);

  // compute questions for current category/difficulty
  const shuffledQuestions = useMemo(() => {
    if (!selectedCategory) return [];
    const questions = quizData[selectedCategory]?.[selectedDifficulty] || [];
    return shuffle(questions);
  }, [selectedCategory, selectedDifficulty]);

  const totalQuestions = shuffledQuestions.length;

  const currentQuestion = shuffledQuestions[currentQuestionIndex] || null;

  const setSelectedCategory = useCallback((category) => {
    setSelectedCategoryState(category);
    setQuizState(QUIZ_STATES.DIFFICULTY);
  }, []);

  const startQuiz = useCallback((category, difficulty = "easy") => {
    if (category) setSelectedCategoryState(category);
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setQuizState(QUIZ_STATES.PLAYING);
  }, []);

  const getSelectedAnswer = useCallback(() => {
    return userAnswers.find((a) => a.questionIndex === currentQuestionIndex) || null;
  }, [userAnswers, currentQuestionIndex]);

  const handleAnswerSelect = useCallback((answerId) => {
    if (!currentQuestion) return;
    // prevent double answering
    if (userAnswers.some((a) => a.questionIndex === currentQuestionIndex)) return;

    const answer = currentQuestion.answers.find((a) => a.id === answerId);
    const isCorrect = !!answer && !!answer.correct;
    const points = isCorrect ? (currentQuestion.points || 0) : 0;

    const newAnswer = {
      questionIndex: currentQuestionIndex,
      questionId: currentQuestion.id,
      answerId,
      isCorrect,
      points,
    };

    setUserAnswers((prev) => [...prev, newAnswer]);
    if (isCorrect) setScore((s) => s + points);
  }, [currentQuestion, currentQuestionIndex, userAnswers]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((i) => Math.min(i + 1, totalQuestions - 1));
  }, [totalQuestions]);

  const previousQuestion = useCallback(() => {
    setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goToQuestion = useCallback((index) => {
    if (index < 0 || index >= totalQuestions) return;
    setCurrentQuestionIndex(index);
  }, [totalQuestions]);

  const finishQuiz = useCallback(() => {
    setQuizState(QUIZ_STATES.RESULTS);
    // persist a simple history entry
    setQuizHistory((h) => [
      ...h,
      { date: Date.now(), score, total: totalQuestions },
    ]);
  }, [score, totalQuestions]);

  const resetQuiz = useCallback(() => {
    setQuizState(QUIZ_STATES.CATEGORY);
    setSelectedCategoryState("");
    setSelectedDifficulty("easy");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
  }, []);

  const restartQuiz = useCallback(() => {
    // restart with same category/difficulty
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setQuizState(QUIZ_STATES.PLAYING);
  }, []);

  const getQuestionStatus = useCallback((index) => {
    if (index === currentQuestionIndex) return QUESTION_STATUS.CURRENT;
    const answered = userAnswers.find((a) => a.questionIndex === index);
    if (!answered) return QUESTION_STATUS.UNANSWERED;
    return answered.isCorrect ? QUESTION_STATUS.CORRECT : QUESTION_STATUS.INCORRECT;
  }, [currentQuestionIndex, userAnswers]);

  const canProceed = useCallback(() => {
    // allow proceed if current question answered or we're at the end
    const answered = userAnswers.some((a) => a.questionIndex === currentQuestionIndex);
    return answered || currentQuestionIndex === totalQuestions - 1;
  }, [userAnswers, currentQuestionIndex, totalQuestions]);

  const progress = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return Math.round((userAnswers.length / totalQuestions) * 100);
  }, [userAnswers.length, totalQuestions]);

  const timeLeft = useMemo(() => {
    // minimal time value derived from difficulty or question
    if (currentQuestion?.timeLimit) return currentQuestion.timeLimit;
    const mapping = {
      easy: TIME_LIMITS.EASY,
      medium: TIME_LIMITS.MEDIUM,
      hard: TIME_LIMITS.HARD,
    };
    return mapping[selectedDifficulty] || TIME_LIMITS.EASY;
  }, [currentQuestion, selectedDifficulty]);

  return {
    // state
    quizState,
    selectedCategory,
    selectedDifficulty,
    currentQuestionIndex,
    currentQuestion,
    questions: shuffledQuestions,
    totalQuestions,
    score,
    userAnswers,
    timeLeft,
    progress,
    quizHistory,

    // actions
    setSelectedCategory,
    startQuiz,
    handleAnswerSelect,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    resetQuiz,
    restartQuiz,
    finishQuiz,

    // helpers
    getQuestionStatus,
    getSelectedAnswer,
    canProceed,

    // constants
    QUIZ_STATES,
  };
};
