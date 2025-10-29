import React from "react";
import { useQuiz } from "./hooks";
import { CategorySelection, QuizPage } from "./pages";
import { Header, Footer } from "./components/layout";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const quiz = useQuiz();

  const renderContent = () => {
    switch (quiz.quizState) {
      case "category":
        return (
          <CategorySelection
            onSelectCategory={(category) => {
              quiz.setSelectedCategory(category);
            }}
            onSelectDifficulty={(difficulty) => {
              quiz.startQuiz(quiz.selectedCategory, difficulty);
            }}
            selectedCategory={quiz.selectedCategory}
            quizHistory={quiz.quizHistory}
          />
        );

      case "playing":
        return <QuizPage quiz={quiz} />;

      case "results":
        return <ResultsPage quiz={quiz} />;

      default:
        return (
          <CategorySelection
            onSelectCategory={(category) => {
              quiz.setSelectedCategory(category);
            }}
            onSelectDifficulty={(difficulty) => {
              quiz.startQuiz(quiz.selectedCategory, difficulty);
            }}
            selectedCategory={quiz.selectedCategory}
            quizHistory={quiz.quizHistory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header
        onReset={quiz.resetQuiz}
        showReset={quiz.quizState !== "category"}
      />

      <main className="flex-1">{renderContent()}</main>

      <Footer />
    </div>
  );
}

export default App;
