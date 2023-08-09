function QuestionOptions({ options, dispatch, correctOption, answer }) {
  const hasAnswered = answer ?? false;

  return (
    <div className="options">
      {options?.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} 
            ${
              hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
            }`}
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
