import React from "react";
import QuizHeader from "./QuizHeader";
import QuestionNavigation from "./QuestionNavigation";
import QuestionCard from "./QuestionCard";
import QuizControls from "./QuizControls";

const QuizSession = ({ quiz }) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    timeLeft,
    selectedCategory,
    selectedDifficulty,
    userAnswers,
    questions,
    handleAnswerSelect,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    finishQuiz,
    getSelectedAnswer,
    canProceed,
  } = quiz;

  const selectedAnswer = getSelectedAnswer();
  const showResult = !!selectedAnswer;

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      {/* الرأس الرئيسي */}
      <QuizHeader
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        score={score}
        timeLeft={timeLeft}
        currentQuestion={currentQuestion}
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* التنقل بين الأسئلة (الشريط الجانبي) */}
        <div className="lg:col-span-1">
          <QuestionNavigation
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onQuestionSelect={goToQuestion}
          />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="lg:col-span-3 space-y-6">
          {/* بطاقة السؤال */}
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onAnswerSelect={handleAnswerSelect}
            timeLeft={timeLeft}
          />

          {/* عناصر التحكم */}
          <QuizControls
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            canProceed={canProceed}
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            onFinish={finishQuiz}
            selectedAnswer={selectedAnswer}
          />

          {/* إحصائيات سريعة */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              📊 Quick Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {userAnswers.filter((ans) => ans.isCorrect).length}
                </div>
                <div className="text-sm text-green-800">Correct</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {userAnswers.filter((ans) => !ans.isCorrect).length}
                </div>
                <div className="text-sm text-red-800">Incorrect</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {userAnswers.length}/{totalQuestions}
                </div>
                <div className="text-sm text-blue-800">Answered</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {score}
                </div>
                <div className="text-sm text-purple-800">Total Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSession;
