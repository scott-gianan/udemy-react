import { useState } from "react";
import QuestionOptions from "./QuestionOptions";

function Question({ dispatch, currentQuestion, answer, index }) {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const { question, options, points, correctOption } = currentQuestion;
  const handleRevealAnswer = () => {
    if (answer === null) return;
    setRevealAnswer((v) => !v);
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
