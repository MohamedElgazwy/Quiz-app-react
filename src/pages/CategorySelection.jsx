import React from "react";
import { Card, Button } from "../components/ui";
import { categories, difficulties } from "../data/quizData";

const CategorySelection = ({
  onSelectCategory,
  onSelectDifficulty,
  selectedCategory,
  quizHistory,
}) => {
  const getCategoryStats = (categoryId) => {
    const categoryQuizzes = quizHistory.filter(
      (quiz) => quiz.category === categoryId
    );
    if (categoryQuizzes.length === 0) return null;

    const bestQuiz = categoryQuizzes.reduce((best, quiz) => {
      const percentage = (quiz.score / quiz.totalScore) * 100;
      const bestPercentage = (best.score / best.totalScore) * 100;
      return percentage > bestPercentage ? quiz : best;
    });

    return {
      played: categoryQuizzes.length,
      bestScore: Math.round((bestQuiz.score / bestQuiz.totalScore) * 100),
    };
  };

  if (!selectedCategory) {
    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Category 🎯
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a category that matches your interests and test your
            knowledge!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const stats = getCategoryStats(category.id);

            return (
              <Card
                key={category.id}
                className="text-center p-6 cursor-pointer transition-all duration-300 hover:scale-105"
                hover
                onClick={() => onSelectCategory(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {stats ? (
                  <div className="bg-gray-50 rounded-lg p-3 mt-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-gray-600">
                          Played
                        </div>
                        <div className="text-primary-600 font-bold">
                          {stats.played}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-600">Best</div>
                        <div className="text-green-600 font-bold">
                          {stats.bestScore}%
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-3 mt-4">
                    <div className="text-xs text-gray-500 font-semibold">
                      New Category
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <Button variant="outline" size="small" className="w-full">
                    Select Category
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Start Options */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Quick Start 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button
              variant="primary"
              size="large"
              onClick={() => onSelectCategory("general")}
              className="flex flex-col items-center py-6"
            >
              <span className="text-2xl mb-2">🧠</span>
              <span>General Knowledge</span>
              <span className="text-sm opacity-80 mt-1">Easy Level</span>
            </Button>

            <Button
              variant="success"
              size="large"
              onClick={() => onSelectCategory("science")}
              className="flex flex-col items-center py-6"
            >
              <span className="text-2xl mb-2">🔬</span>
              <span>Science</span>
              <span className="text-sm opacity-80 mt-1">Medium Level</span>
            </Button>

            <Button
              variant="warning"
              size="large"
              onClick={() => {
                onSelectCategory("general");
                onSelectDifficulty("hard");
              }}
              className="flex flex-col items-center py-6"
            >
              <span className="text-2xl mb-2">💪</span>
              <span>Challenge Mode</span>
              <span className="text-sm opacity-80 mt-1">Hard Level</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // عرض صفحة اختيار المستوى الصعوبة
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <button
          onClick={() => onSelectCategory(null)}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Categories
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Difficulty Level
        </h1>
        <p className="text-xl text-gray-600">
          How challenging do you want your{" "}
          {categories.find((c) => c.id === selectedCategory)?.name} quiz to be?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {difficulties.map((difficulty) => (
          <Card
            key={difficulty.id}
            className="text-center p-8 cursor-pointer transition-all duration-300 hover:scale-105"
            hover
            onClick={() => onSelectDifficulty(difficulty.id)}
          >
            <div
              className={`text-6xl mb-6 ${
                difficulty.id === "easy"
                  ? "text-green-500"
                  : difficulty.id === "medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {difficulty.id === "easy"
                ? "😊"
                : difficulty.id === "medium"
                ? "😎"
                : "🔥"}
            </div>

            <h3
              className={`text-2xl font-bold mb-3 ${
                difficulty.id === "easy"
                  ? "text-green-600"
                  : difficulty.id === "medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {difficulty.name}
            </h3>

            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Time per question:</span>
                <span className="font-semibold">
                  {difficulty.id === "easy"
                    ? "30s"
                    : difficulty.id === "medium"
                    ? "25s"
                    : "20s"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Points multiplier:</span>
                <span className="font-semibold">
                  {difficulty.id === "easy"
                    ? "1x"
                    : difficulty.id === "medium"
                    ? "1.5x"
                    : "2x"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Questions:</span>
                <span className="font-semibold">
                  {selectedCategory === "general"
                    ? difficulty.id === "easy"
                      ? "3"
                      : difficulty.id === "medium"
                      ? "2"
                      : "1"
                    : selectedCategory === "science"
                    ? difficulty.id === "easy"
                      ? "1"
                      : "Coming soon"
                    : "Varies"}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-2">Perfect for:</div>
              <div className="text-sm font-semibold">
                {difficulty.id === "easy"
                  ? "Beginners & Casual Players"
                  : difficulty.id === "medium"
                  ? "Experienced Players"
                  : "Experts & Challengers"}
              </div>
            </div>

            <Button
              variant={
                difficulty.id === "easy"
                  ? "success"
                  : difficulty.id === "medium"
                  ? "warning"
                  : "error"
              }
              size="large"
              className="w-full"
            >
              Start {difficulty.name} Quiz
            </Button>
          </Card>
        ))}
      </div>

      {/* Difficulty Comparison */}
      <Card className="mt-12 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Difficulty Comparison 📊
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600 mb-2">Easy</div>
            <div>More time to think</div>
            <div>Standard points</div>
            <div>Beginner questions</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="font-bold text-yellow-600 mb-2">Medium</div>
            <div>Moderate time pressure</div>
            <div>1.5x points</div>
            <div>Intermediate questions</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="font-bold text-red-600 mb-2">Hard</div>
            <div>Time challenge</div>
            <div>2x points</div>
            <div>Expert questions</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CategorySelection;
