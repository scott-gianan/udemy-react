import { useState } from "react";
import QuestionOptions from "./QuestionOptions";
import Timer from "./Timer";
import { useQuestionsContext } from "../context/QuestionContextProvider";

function Question() {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const { questions, dispatch, index, answer } = useQuestionsContext();
  const { question, options, correctOption } = questions[index];
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
      return;
    }
    setRevealAnswer((v) => !v);
    dispatch({ type: "nextQuestion" });
  };
  return (
    <div>
      <h4>{question}</h4>
      <QuestionOptions
        options={options}
        correctOption={correctOption}
        answer={answer}
        isAnswerReveal={revealAnswer}
        onChosenAnswer={handleChosenAnswer}
      />
      <div className="btn-container">
        <Timer />

        {revealAnswer ? (
          <button
            className="btn btn-next"
            onClick={() => handleNextQuestion(index)}
          >
            Next Question
          </button>
        ) : (
          <button
            className="btn btn-reveal"
            onClick={handleRevealAnswer}
            disabled={revealAnswer}
          >
            Reveal Answer
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
