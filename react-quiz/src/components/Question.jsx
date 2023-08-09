import QuestionOptions from "./QuestionOptions";

function Question({ dispatch, currentQuestion, answer }) {
  const { question, options, points, correctOption } = currentQuestion;
  return (
    <div>
      <h4>{question}</h4>
      <QuestionOptions
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
      />
    </div>
  );
}

export default Question;
