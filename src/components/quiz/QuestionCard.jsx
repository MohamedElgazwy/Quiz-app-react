import React from "react";
import { AnswerOption, Card } from "../ui";

const QuestionCard = ({
  question,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  timeLeft,
  className = "",
}) => {
  if (!question) return null;

  return (
    <Card className={`p-8 ${className}`} hover={false}>
      {/* رأس السؤال */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
              {question.points || 10} Points
            </div>
            <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
              ⏱️ {timeLeft}s left
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>
      </div>

      {/* خيارات الإجابة */}
      <div className="space-y-4">
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswer?.selectedAnswerId === answer.id;
          const isCorrect = answer.correct;

          return (
            <AnswerOption
              key={answer.id}
              answer={answer}
              isSelected={isSelected}
              isCorrect={isCorrect}
              showResult={showResult}
              disabled={showResult}
              onSelect={() => onAnswerSelect(answer.id)}
              className="transition-all duration-200"
            />
          );
        })}
      </div>

      {/* شرح الإجابة (يظهر بعد الإجابة) */}
      {showResult && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-600 font-semibold">💡 Explanation</span>
          </div>
          <p className="text-blue-800 text-sm leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* مؤشر الوقت الحرج */}
      {timeLeft <= 10 && !showResult && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2 text-red-600 font-semibold">
            <span>⏰</span>
            <span>Time running out! Hurry up!</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
