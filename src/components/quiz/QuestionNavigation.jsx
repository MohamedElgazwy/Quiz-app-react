import React from "react";

const QuestionNavigation = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  onQuestionSelect,
  className = "",
}) => {
  const getQuestionStatus = (questionIndex) => {
    const question = questions[questionIndex];
    if (!question) return "unanswered";

    const answer = userAnswers.find((ans) => ans.questionId === question.id);

    if (questionIndex === currentQuestionIndex) return "current";
    if (answer) return answer.isCorrect ? "correct" : "incorrect";
    return "unanswered";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "bg-primary-500 text-white border-primary-500";
      case "correct":
        return "bg-green-500 text-white border-green-500";
      case "incorrect":
        return "bg-red-500 text-white border-red-500";
      default:
        return "bg-white text-gray-600 border-gray-300 hover:border-primary-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "current":
        return "📍";
      case "correct":
        return "✅";
      case "incorrect":
        return "❌";
      default:
        return "⭕";
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">🧭</span>
        Question Navigation
      </h3>

      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
        {questions.map((question, index) => {
          const status = getQuestionStatus(index);
          const isClickable = status !== "current";

          return (
            <button
              key={question.id}
              onClick={() => isClickable && onQuestionSelect(index)}
              className={`
                w-10 h-10 rounded-lg border-2 font-semibold text-sm transition-all duration-200
                ${getStatusColor(status)}
                ${
                  isClickable
                    ? "cursor-pointer hover:scale-110 hover:shadow-md"
                    : "cursor-default"
                }
                flex items-center justify-center
              `}
              title={`Question ${index + 1} - ${status}`}
            >
              {isClickable ? (
                <span className="text-xs">{index + 1}</span>
              ) : (
                <span className="text-xs">{getStatusIcon(status)}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* وسيلة الإيضاح */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary-500 rounded"></div>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span>Incorrect</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white border border-gray-300 rounded"></div>
          <span>Unanswered</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigation;
