import React from "react";
import { QuizSession } from "../components/quiz";

const QuizPage = ({ quiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6">
      <QuizSession quiz={quiz} />
    </div>
  );
};

export default QuizPage;
