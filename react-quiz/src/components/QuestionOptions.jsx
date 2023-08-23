function QuestionOptions({
  options,
  correctOption,
  answer,
  isAnswerReveal,
  onChosenAnswer,
}) {
  const hasFinalAnswer = isAnswerReveal && answer !== null;

  return (
    <div className="options">
      {options?.map((option, index) => {
        const userAnswer = index === answer && "answer";
        const isAnswerCorrect =
          hasFinalAnswer && (index === correctOption ? "correct" : "wrong");
        return (
          <button
            className={`btn btn-option ${userAnswer} ${isAnswerCorrect}`}
            key={option}
            onClick={() => onChosenAnswer(index)}
            disabled={hasFinalAnswer}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionOptions;
