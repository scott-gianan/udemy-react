import { useState } from "react";
import QuestionOptions from "./QuestionOptions";

function Question({ dispatch, currentQuestion, answer }) {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const { question, options, points, correctOption } = currentQuestion;
  const handleRevealAnswer = () => {
    setRevealAnswer((v) => !v);
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
          <button
            className="btn"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
