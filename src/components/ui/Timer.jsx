import React from "react";

const Timer = ({
  timeLeft,
  totalTime,
  size = "medium",
  showProgress = true,
  className = "",
}) => {
  const progress = totalTime ? (timeLeft / totalTime) * 100 : 0;

  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  };

  const getTimerColor = () => {
    if (timeLeft > totalTime * 0.5) return "text-success";
    if (timeLeft > totalTime * 0.25) return "text-warning";
    return "text-error";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`font-mono font-bold ${getTimerColor()} ${sizes[size]}`}>
        {formatTime(timeLeft)}
      </div>

      {showProgress && totalTime && (
        <div className="w-20 bg-gray-200 rounded-full h-1 mt-1 overflow-hidden">
          <div
            className={`h-1 transition-all duration-1000 ease-out ${
              timeLeft > totalTime * 0.5
                ? "bg-success"
                : timeLeft > totalTime * 0.25
                ? "bg-warning"
                : "bg-error"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Timer;
