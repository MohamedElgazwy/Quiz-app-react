export const calculateScore = (userAnswers, questions) => {
  return userAnswers.reduce((score, answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    return answer.isCorrect ? score + (question?.points || 10) : score;
  }, 0);
};

export const getScoreMessage = (score, totalQuestions) => {
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  if (percentage >= 90)
    return {
      message: "Perfect! 🎉",
      color: "text-green-500",
      emoji: "🏆",
    };
  if (percentage >= 70)
    return {
      message: "Excellent! 👍",
      color: "text-blue-500",
      emoji: "⭐",
    };
  if (percentage >= 50)
    return {
      message: "Good job! 😊",
      color: "text-yellow-500",
      emoji: "👍",
    };
  if (percentage >= 30)
    return {
      message: "Not bad! 💪",
      color: "text-orange-500",
      emoji: "💪",
    };
  return {
    message: "Keep practicing! 📚",
    color: "text-red-500",
    emoji: "📚",
  };
};

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const calculateAverageTime = (quizHistory) => {
  if (!quizHistory.length) return 0;
  const totalTime = quizHistory.reduce((sum, quiz) => sum + quiz.timeSpent, 0);
  return Math.round(totalTime / quizHistory.length);
};

export const getBestScore = (
  quizHistory,
  category = null,
  difficulty = null
) => {
  const filtered = quizHistory.filter((quiz) => {
    if (category && quiz.category !== category) return false;
    if (difficulty && quiz.difficulty !== difficulty) return false;
    return true;
  });

  if (!filtered.length) return null;

  return filtered.reduce((best, quiz) => {
    const percentage = (quiz.score / quiz.totalScore) * 100;
    const bestPercentage = (best.score / best.totalScore) * 100;
    return percentage > bestPercentage ? quiz : best;
  });
};
