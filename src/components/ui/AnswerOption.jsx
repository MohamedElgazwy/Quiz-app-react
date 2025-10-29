import React from "react";

const AnswerOption = ({
  answer,
  isSelected = false,
  isCorrect = null,
  showResult = false,
  disabled = false,
  onSelect,
  className = "",
}) => {
  const getButtonClasses = () => {
    let baseClasses =
      "w-full text-left p-4 rounded-xl border-2 font-semibold transition-all duration-300 transform ";

    if (disabled) {
      baseClasses += "cursor-not-allowed transform-none ";
    } else {
      baseClasses += "hover:-translate-y-1 hover:shadow-lg ";
    }

    if (showResult) {
      if (isCorrect) {
        return baseClasses + "border-green-500 bg-green-100 text-green-800";
      } else if (isSelected && !isCorrect) {
        return baseClasses + "border-red-500 bg-red-100 text-red-800";
      } else {
        return baseClasses + "border-gray-200 bg-gray-100 text-gray-500";
      }
    } else {
      if (isSelected) {
        return baseClasses + "border-primary-500 bg-primary-500 text-white";
      } else {
        return (
          baseClasses +
          "border-gray-300 bg-white text-gray-700 hover:border-primary-500 hover:bg-primary-50"
        );
      }
    }
  };

  return (
    <button
      className={`${getButtonClasses()} ${className}`}
      onClick={() => !disabled && onSelect?.(answer)}
      disabled={disabled}
    >
      <div className="flex items-center">
        <div
          className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-sm font-bold ${
            showResult
              ? isCorrect
                ? "border-green-500 bg-green-500 text-white"
                : isSelected && !isCorrect
                ? "border-red-500 bg-red-500 text-white"
                : "border-gray-300 text-gray-300"
              : isSelected
              ? "border-white bg-white text-primary-500"
              : "border-gray-300 text-gray-300"
          }`}
        >
          {String.fromCharCode(65 + (answer.id % 4))}
        </div>
        <span>{answer.text}</span>
      </div>
    </button>
  );
};

export default AnswerOption;
