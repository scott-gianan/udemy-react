import { useState } from "react";
import QuestionOptions from "./QuestionOptions";

function Question({ dispatch, currentQuestion, answer, index }) {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const { question, options, points, correctOption } = currentQuestion;
  const handleChosenAnswer = (index) => {
    setChosenAnswer(() => index);
    dispatch({ type: "tempAnswer", payload: index });
  };
  const handleRevealAnswer = () => {
    if (answer === null) return;
    setRevealAnswer((v) => !v);
    dispatch({ type: "newAnswer", payload: chosenAnswer });
  };
  const handleNextQuestion = (i) => {
    if (i === 14) {
      dispatch({ type: "finished" });
    }
    dispatch({ type: "nextQuestion" });
  };
  return (
    <div>
      <h4>{question}</h4>
      <QuestionOptions
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
        isAnswerReveal={revealAnswer}
        onChosenAnswer={handleChosenAnswer}
      />
      <div className="btn-container">
        <button
          className="btn"
          onClick={handleRevealAnswer}
          disabled={revealAnswer}
        >
          Reveal Answer
        </button>
        {revealAnswer && (
          <button className="btn" onClick={() => handleNextQuestion(index)}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
