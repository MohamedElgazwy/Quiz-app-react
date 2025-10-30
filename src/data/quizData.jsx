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
      {
        id: 6,
        question: "How many continents are there on Earth?",
        answers: [
          { id: 1, text: "5", correct: false },
          { id: 2, text: "6", correct: false },
          { id: 3, text: "7", correct: true },
          { id: 4, text: "8", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
      },
    ],
    hard: [
      {
        id: 7,
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
      {
        id: 8,
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
          { id: 1, text: "Charles Dickens", correct: false },
          { id: 2, text: "William Shakespeare", correct: true },
          { id: 3, text: "Jane Austen", correct: false },
          { id: 4, text: "Mark Twain", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "William Shakespeare, the English playwright, wrote 'Romeo and Juliet' in the late 16th century.",
      },
      {
        id: 9,
        question: "What is the smallest country in the world?",
        answers: [
          { id: 1, text: "Monaco", correct: false },
          { id: 2, text: "Vatican City", correct: true },
          { id: 3, text: "San Marino", correct: false },
          { id: 4, text: "Liechtenstein", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Vatican City is the smallest country in the world at just 0.17 square miles (0.44 km²).",
      },
    ],
  },
  science: {
    easy: [
      {
        id: 10,
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
      {
        id: 11,
        question: "Which organ pumps blood throughout the body?",
        answers: [
          { id: 1, text: "Liver", correct: false },
          { id: 2, text: "Brain", correct: false },
          { id: 3, text: "Heart", correct: true },
          { id: 4, text: "Lungs", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "The heart is a muscular organ that pumps blood through the circulatory system.",
      },
      {
        id: 12,
        question: "What is the closest planet to the Sun?",
        answers: [
          { id: 1, text: "Venus", correct: false },
          { id: 2, text: "Earth", correct: false },
          { id: 3, text: "Mars", correct: false },
          { id: 4, text: "Mercury", correct: true },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "Mercury is the smallest and innermost planet in our solar system.",
      },
    ],
    medium: [
      {
        id: 13,
        question: "What is the atomic number of Carbon?",
        answers: [
          { id: 1, text: "6", correct: true },
          { id: 2, text: "12", correct: false },
          { id: 3, text: "8", correct: false },
          { id: 4, text: "14", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.",
      },
      {
        id: 14,
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
          { id: 1, text: "Oxygen", correct: false },
          { id: 2, text: "Nitrogen", correct: false },
          { id: 3, text: "Carbon Dioxide", correct: true },
          { id: 4, text: "Hydrogen", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis.",
      },
      {
        id: 15,
        question: "What is the speed of light in a vacuum?",
        answers: [
          { id: 1, text: "300,000 km/s", correct: true },
          { id: 2, text: "150,000 km/s", correct: false },
          { id: 3, text: "500,000 km/s", correct: false },
          { id: 4, text: "1,000,000 km/s", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "The speed of light in a vacuum is approximately 300,000 kilometers per second.",
      },
    ],
    hard: [
      {
        id: 16,
        question: "Which subatomic particle has a negative charge?",
        answers: [
          { id: 1, text: "Proton", correct: false },
          { id: 2, text: "Neutron", correct: false },
          { id: 3, text: "Electron", correct: true },
          { id: 4, text: "Positron", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Electrons carry a negative electric charge, while protons carry a positive charge.",
      },
      {
        id: 17,
        question: "What is the chemical formula for table salt?",
        answers: [
          { id: 1, text: "NaCl", correct: true },
          { id: 2, text: "KCl", correct: false },
          { id: 3, text: "CaCO3", correct: false },
          { id: 4, text: "H2SO4", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Table salt is sodium chloride (NaCl), composed of sodium and chlorine ions.",
      },
      {
        id: 18,
        question: "Which scientist proposed the theory of relativity?",
        answers: [
          { id: 1, text: "Isaac Newton", correct: false },
          { id: 2, text: "Niels Bohr", correct: false },
          { id: 3, text: "Albert Einstein", correct: true },
          { id: 4, text: "Stephen Hawking", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Albert Einstein developed the theory of relativity, which includes the famous equation E=mc².",
      },
    ],
  },
  history: {
    easy: [
      {
        id: 19,
        question: "In which year did World War II end?",
        answers: [
          { id: 1, text: "1945", correct: true },
          { id: 2, text: "1918", correct: false },
          { id: 3, text: "1939", correct: false },
          { id: 4, text: "1950", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "World War II ended in 1945 with the surrender of Germany and Japan.",
      },
      {
        id: 20,
        question: "Who was the first president of the United States?",
        answers: [
          { id: 1, text: "Thomas Jefferson", correct: false },
          { id: 2, text: "Abraham Lincoln", correct: false },
          { id: 3, text: "George Washington", correct: true },
          { id: 4, text: "John Adams", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "George Washington served as the first president from 1789 to 1797.",
      },
      {
        id: 21,
        question: "Which ancient civilization built the pyramids?",
        answers: [
          { id: 1, text: "Romans", correct: false },
          { id: 2, text: "Greeks", correct: false },
          { id: 3, text: "Egyptians", correct: true },
          { id: 4, text: "Mayans", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "The ancient Egyptians built the pyramids as tombs for pharaohs.",
      },
    ],
    medium: [
      {
        id: 22,
        question: "Who wrote the 'I Have a Dream' speech?",
        answers: [
          { id: 1, text: "Malcolm X", correct: false },
          { id: 2, text: "Martin Luther King Jr.", correct: true },
          { id: 3, text: "Rosa Parks", correct: false },
          { id: 4, text: "John F. Kennedy", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Martin Luther King Jr. delivered his iconic speech in 1963.",
      },
      {
        id: 23,
        question: "Which empire was ruled by Julius Caesar?",
        answers: [
          { id: 1, text: "Greek Empire", correct: false },
          { id: 2, text: "Roman Empire", correct: true },
          { id: 3, text: "Ottoman Empire", correct: false },
          { id: 4, text: "Persian Empire", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation: "Julius Caesar was a Roman general and statesman.",
      },
      {
        id: 24,
        question: "When did the French Revolution begin?",
        answers: [
          { id: 1, text: "1776", correct: false },
          { id: 2, text: "1789", correct: true },
          { id: 3, text: "1812", correct: false },
          { id: 4, text: "1799", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "The French Revolution began in 1789 with the storming of the Bastille.",
      },
    ],
    hard: [
      {
        id: 25,
        question: "Who was the Byzantine emperor who codified Roman law?",
        answers: [
          { id: 1, text: "Constantine the Great", correct: false },
          { id: 2, text: "Justinian I", correct: true },
          { id: 3, text: "Theodosius I", correct: false },
          { id: 4, text: "Heraclius", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Justinian I commissioned the Corpus Juris Civilis to organize Roman law.",
      },
      {
        id: 26,
        question: "Which treaty ended the Thirty Years' War?",
        answers: [
          { id: 1, text: "Treaty of Versailles", correct: false },
          { id: 2, text: "Peace of Westphalia", correct: true },
          { id: 3, text: "Treaty of Utrecht", correct: false },
          { id: 4, text: "Peace of Augsburg", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "The Peace of Westphalia in 1648 ended the Thirty Years' War.",
      },
      {
        id: 27,
        question: "Who was the last Tsar of Russia?",
        answers: [
          { id: 1, text: "Peter the Great", correct: false },
          { id: 2, text: "Alexander II", correct: false },
          { id: 3, text: "Nicholas II", correct: true },
          { id: 4, text: "Ivan the Terrible", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "Nicholas II was the last Emperor of Russia, ruling until 1917.",
      },
    ],
  },
  geography: {
    easy: [
      {
        id: 28,
        question: "What is the longest river in the world?",
        answers: [
          { id: 1, text: "Amazon River", correct: false },
          { id: 2, text: "Nile River", correct: true },
          { id: 3, text: "Yangtze River", correct: false },
          { id: 4, text: "Mississippi River", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation: "The Nile River in Africa is approximately 6,650 km long.",
      },
      {
        id: 29,
        question: "Which continent is the Sahara Desert located in?",
        answers: [
          { id: 1, text: "Asia", correct: false },
          { id: 2, text: "Australia", correct: false },
          { id: 3, text: "Africa", correct: true },
          { id: 4, text: "South America", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation:
          "The Sahara Desert is the world's largest hot desert in North Africa.",
      },
      {
        id: 30,
        question: "What is the capital of Japan?",
        answers: [
          { id: 1, text: "Seoul", correct: false },
          { id: 2, text: "Beijing", correct: false },
          { id: 3, text: "Tokyo", correct: true },
          { id: 4, text: "Osaka", correct: false },
        ],
        timeLimit: 30,
        points: 10,
        explanation: "Tokyo is the capital and largest city of Japan.",
      },
    ],
    medium: [
      {
        id: 31,
        question: "Which country has the most natural lakes?",
        answers: [
          { id: 1, text: "United States", correct: false },
          { id: 2, text: "Russia", correct: false },
          { id: 3, text: "Canada", correct: true },
          { id: 4, text: "China", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "Canada has over 2 million lakes, more than any other country.",
      },
      {
        id: 32,
        question: "What is the world's largest ocean?",
        answers: [
          { id: 1, text: "Atlantic Ocean", correct: false },
          { id: 2, text: "Indian Ocean", correct: false },
          { id: 3, text: "Pacific Ocean", correct: true },
          { id: 4, text: "Arctic Ocean", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation: "The Pacific Ocean covers about 63 million square miles.",
      },
      {
        id: 33,
        question: "Which mountain range separates Europe from Asia?",
        answers: [
          { id: 1, text: "Andes", correct: false },
          { id: 2, text: "Himalayas", correct: false },
          { id: 3, text: "Ural Mountains", correct: true },
          { id: 4, text: "Alps", correct: false },
        ],
        timeLimit: 25,
        points: 15,
        explanation:
          "The Ural Mountains form the traditional boundary between Europe and Asia.",
      },
    ],
    hard: [
      {
        id: 34,
        question: "What is the capital of Bhutan?",
        answers: [
          { id: 1, text: "Kathmandu", correct: false },
          { id: 2, text: "Thimphu", correct: true },
          { id: 3, text: "Dhaka", correct: false },
          { id: 4, text: "Colombo", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation: "Thimphu is the capital and largest city of Bhutan.",
      },
      {
        id: 35,
        question: "Which country has the most time zones?",
        answers: [
          { id: 1, text: "United States", correct: false },
          { id: 2, text: "China", correct: false },
          { id: 3, text: "Russia", correct: false },
          { id: 4, text: "France", correct: true },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "France has 12 time zones due to its overseas territories.",
      },
      {
        id: 36,
        question: "What is the deepest point in the world's oceans?",
        answers: [
          { id: 1, text: "Puerto Rico Trench", correct: false },
          { id: 2, text: "Java Trench", correct: false },
          { id: 3, text: "Mariana Trench", correct: true },
          { id: 4, text: "Tonga Trench", correct: false },
        ],
        timeLimit: 20,
        points: 20,
        explanation:
          "The Mariana Trench in the Pacific Ocean reaches about 36,000 feet deep.",
      },
    ],
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
