import React from "react";
import { Card, Button, ScoreBadge } from "../components/ui";

const ResultsPage = ({ quiz }) => {
  const { score, totalQuestions, userAnswers, restartQuiz, resetQuiz } = quiz;
  const correctAnswers = userAnswers.filter((ans) => ans.isCorrect).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 90)
      return { message: "Outstanding! 🏆", color: "text-yellow-600" };
    if (percentage >= 70)
      return { message: "Excellent! ⭐", color: "text-green-600" };
    if (percentage >= 50)
      return { message: "Good Job! 👍", color: "text-blue-600" };
    if (percentage >= 30)
      return { message: "Not Bad! 💪", color: "text-orange-600" };
    return { message: "Keep Practicing! 📚", color: "text-red-600" };
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Quiz Completed! 🎉
        </h1>

        <div className="flex justify-center mb-8">
          <ScoreBadge score={score} total={totalQuestions * 10} size="large" />
        </div>

        <div className={`text-2xl font-bold ${scoreInfo.color} mb-2`}>
          {scoreInfo.message}
        </div>

        <p className="text-gray-600 text-lg mb-8">
          You got {correctAnswers} out of {totalQuestions} questions correct (
          {percentage}%)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {correctAnswers}
            </div>
            <div className="text-green-800">Correct Answers</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {totalQuestions - correctAnswers}
            </div>
            <div className="text-red-800">Incorrect Answers</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{score}</div>
            <div className="text-blue-800">Total Points</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="large" onClick={restartQuiz}>
            Play Again
          </Button>
          <Button variant="outline" size="large" onClick={resetQuiz}>
            Choose New Category
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ResultsPage;
