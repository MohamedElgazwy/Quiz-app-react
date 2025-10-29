import React from "react";

const ProgressBar = ({
  progress,
  color = "primary",
  height = "h-3",
  showLabel = false,
  className = "",
}) => {
  // استخدام الألوان المباشرة
  const colors = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600",
    success: "bg-gradient-to-r from-green-500 to-green-600",
    warning: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    error: "bg-gradient-to-r from-red-500 to-red-600",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}
      >
        <div
          className={`${colors[color]} ${height} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        ></div>
      </div>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
