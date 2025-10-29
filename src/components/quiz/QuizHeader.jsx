import React from "react";
import { Timer, ScoreBadge, ProgressBar } from "../ui";

const QuizHeader = ({
  currentQuestionIndex,
  totalQuestions,
  score,
  timeLeft,
  currentQuestion,
  selectedCategory,
  selectedDifficulty,
}) => {
  const progress =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      {/* المعلومات العلوية */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {selectedCategory} • {selectedDifficulty}
          </div>
          <div className="text-lg font-bold text-gray-800">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Timer
            timeLeft={timeLeft}
            totalTime={currentQuestion?.timeLimit || 30}
            size="large"
            showProgress={true}
          />
          <ScoreBadge
            score={score}
            total={totalQuestions * 10}
            size="medium"
            showLabel={true}
          />
        </div>
      </div>

      {/* شريط التقدم */}
      <ProgressBar
        progress={progress}
        color="primary"
        height="h-3"
        showLabel={true}
        className="mt-2"
      />

      {/* نقاط السؤال الحالي */}
      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span>
          Current question points:{" "}
          <strong>{currentQuestion?.points || 10}</strong>
        </span>
        <span>
          Time limit: <strong>{currentQuestion?.timeLimit || 30}s</strong>
        </span>
      </div>
    </div>
  );
};

export default QuizHeader;
