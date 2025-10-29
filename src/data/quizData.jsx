export const quizData = {
  general: {
    easy: [
      {
        id: 1,
        question: "Which is the largest animal in the world?",
        answers: [
          { id: 1, text: "Shark", correct: false },
          { id: 2, text: "Blue Whale", correct: true },
          { id: 3, text: "Elephant", correct: false },
          { id: 4, text: "Giraffe", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "The Blue Whale is the largest animal ever known to have existed, reaching up to 100 feet in length and 200 tons in weight.",
      },
      {
        id: 2,
        question: "Which is the largest country in the world by area?",
        answers: [
          { id: 1, text: "Egypt", correct: false },
          { id: 2, text: "France", correct: false },
          { id: 3, text: "USA", correct: false },
          { id: 4, text: "Russia", correct: true },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "Russia is the largest country by area, covering more than 17 million square kilometers across Europe and Asia.",
      },
      {
        id: 3,
        question: "Where is Egypt located?",
        answers: [
          { id: 1, text: "Africa", correct: true },
          { id: 2, text: "Asia", correct: false },
          { id: 3, text: "North America", correct: false },
          { id: 4, text: "Australia", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "Egypt is located in northeastern Africa, with the Sinai Peninsula connecting it to Asia.",
      },
    ],
    medium: [
      {
        id: 4,
        question: "What is the capital of Australia?",
        answers: [
          { id: 1, text: "Sydney", correct: false },
          { id: 2, text: "Melbourne", correct: false },
          { id: 3, text: "Canberra", correct: true },
          { id: 4, text: "Perth", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Canberra was purpose-built as the capital of Australia and is located in the Australian Capital Territory.",
      },
      {
        id: 5,
        question: "Which planet is known as the Red Planet?",
        answers: [
          { id: 1, text: "Venus", correct: false },
          { id: 2, text: "Mars", correct: true },
          { id: 3, text: "Jupiter", correct: false },
          { id: 4, text: "Saturn", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Mars appears red due to iron oxide (rust) on its surface, earning it the nickname 'The Red Planet'.",
      },
    ],
    hard: [
      {
        id: 6,
        question: "What is the chemical symbol for Gold?",
        answers: [
          { id: 1, text: "Go", correct: false },
          { id: 2, text: "Gd", correct: false },
          { id: 3, text: "Au", correct: true },
          { id: 4, text: "Ag", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "The symbol Au comes from the Latin word for gold, 'aurum'. Ag is the symbol for Silver (Argentum).",
      },
    ],
  },
  science: {
    easy: [
      {
        id: 7,
        question: "What is H2O commonly known as?",
        answers: [
          { id: 1, text: "Water", correct: true },
          { id: 2, text: "Oxygen", correct: false },
          { id: 3, text: "Hydrogen", correct: false },
          { id: 4, text: "Salt", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.",
      },
    ],
    medium: [],
    hard: [],
  },
  history: {
    easy: [],
    medium: [],
    hard: [],
  },
  geography: {
    easy: [],
    medium: [],
    hard: [],
  },
};

export const categories = [
  {
    id: "general",
    name: "General Knowledge",
    icon: "🧠",
    description: "Test your knowledge across various topics",
    color: "blue",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description: "Explore biology, chemistry, and physics",
    color: "green",
  },
  {
    id: "history",
    name: "History",
    icon: "📚",
    description: "Historical facts and events through ages",
    color: "yellow",
  },
  {
    id: "geography",
    name: "Geography",
    icon: "🌍",
    description: "World geography, countries, and capitals",
    color: "purple",
  },
];

export const difficulties = [
  {
    id: "easy",
    name: "Easy",
    color: "green",
    timeMultiplier: 1,
    pointsMultiplier: 1,
    description: "Perfect for beginners",
  },
  {
    id: "medium",
    name: "Medium",
    color: "yellow",
    timeMultiplier: 0.8,
    pointsMultiplier: 1.5,
    description: "Balanced challenge",
  },
  {
    id: "hard",
    name: "Hard",
    color: "red",
    timeMultiplier: 0.6,
    pointsMultiplier: 2,
    description: "For true experts",
  },
];

export const getQuestionsCount = (category, difficulty) => {
  return quizData[category]?.[difficulty]?.length || 0;
};

export const getTotalPoints = (category, difficulty) => {
  const questions = quizData[category]?.[difficulty] || [];
  return questions.reduce((total, question) => total + question.points, 0);
};
