import React from "react";
import Button from "../ui/Button";

const Header = ({ onReset, showReset = true, className = "" }) => {
  return (
    <header
      className={`bg-white shadow-sm border-b border-gray-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              🎯 QuizMaster
            </div>
          </div>

          {showReset && (
            <Button variant="outline" size="small" onClick={onReset}>
              Restart Quiz
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
