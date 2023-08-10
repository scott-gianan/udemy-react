function QuestionOptions({
  options,
  dispatch,
  correctOption,
  answer,
  isAnswerReveal,
}) {
  const hasAnswered = isAnswerReveal && answer !== null;
  return (
    <div className="options">
      {options?.map((option, index) => {
        const userAnswer = index === answer && "answer";
        const isAnswerCorrect =
          hasAnswered && (index === correctOption ? "correct" : "wrong");
        return (
          <button
            className={`btn btn-option ${userAnswer} ${isAnswerCorrect}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionOptions;
