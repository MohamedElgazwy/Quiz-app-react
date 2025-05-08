import React, { useState } from "react";
import "./quiz.css";
const questions = [
  {
    question: "Which is the largest animal in the world",
    answers: [
      { text: "shark", correct: false, id: 0 },
      { text: "Blue whole", correct: true, id: 1 },
      { text: "Elephant", correct: false, id: 2 },
      { text: "Giraffe", correct: false, id: 3 },
    ],
  },

  {
    question: "Which is the largest Country in the world",
    answers: [
      { text: "Egypt", correct: false, id: 0 },
      { text: "France", correct: false, id: 1 },
      { text: "USA", correct: false, id: 2 },
      { text: "Rissa", correct: true, id: 3 },
    ],
  },

  {
    question: "Where is Egypt",
    answers: [
      { text: "Affrica", correct: false, id: 0 },
      { text: " Asia", correct: true, id: 1 },
      { text: "North America", correct: false, id: 2 },
      { text: "Ustraila", correct: false, id: 3 },
    ],
  },
];
const Quiz = () => {
  const [counter, setCounter] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [chosenBtnId, setChosenBtnId] = useState(null);
  const [result, setResult] = useState(0);
  const handleChosenBtn = (answerId, answer) => {
    setChosenBtnId(answerId);
    setShowNextBtn(true);
    if (answer.correct) setResult((result) => result + 1);
  };
  return (
    <div className="app">
      <div className="quiz">
        <h2>Simple Quiz</h2>
        <hr />
        <div className="content">
          <h3>
            {counter < 3
              ? `${counter + 1}. ${questions[counter].question}`
              : `You got ${result}/3`}
          </h3>
          {counter < 3 && (
            <div>
              {questions[counter].answers.map((answer) => (
                <button
                  onClick={() => {
                    handleChosenBtn(answer.id, answer);

                    console.log(result);
                  }}
                  style={showNextBtn ? { pointerEvents: "none" } : {}}
                  key={answer.id}
                  className={
                    (showNextBtn && answer.correct && "true") ||
                    (chosenBtnId == answer.id
                      ? answer.correct
                        ? "true"
                        : "false"
                      : "")
                  }
                >
                  {answer.text}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="btn">
          {showNextBtn && (
            <button
              style={{
                backgroundColor: "#324233",
                color: "white",
                padding: "10px 40px",
              }}
              onClick={() => {
                setCounter((c) => c + 1);
                setShowNextBtn(!showNextBtn);
                setChosenBtnId(null);
                console.log(result);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
