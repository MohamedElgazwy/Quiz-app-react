import React from "react";

const ScoreBadge = ({ score, total, size = "medium", showLabel = true }) => {
  const percentage = total ? Math.round((score / total) * 100) : 0;

  const sizes = {
    small: "w-12 h-12 text-sm",
    medium: "w-16 h-16 text-base",
    large: "w-20 h-20 text-lg",
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "border-success text-success";
    if (percentage >= 60) return "border-primary-500 text-primary-500";
    if (percentage >= 40) return "border-warning text-warning";
    return "border-error text-error";
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          sizes[size]
        } rounded-full border-4 ${getScoreColor()} flex items-center justify-center font-bold bg-white shadow-lg`}
      >
        {score}
      </div>
      {showLabel && (
        <div className="text-xs text-gray-600 mt-1">
          Score: {score}/{total}
        </div>
      )}
    </div>
  );
};

export default ScoreBadge;
