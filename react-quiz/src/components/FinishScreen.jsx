import RestartQuizBtn from "./RestartQuizBtn";

function FinishScreen({ score, dispatch, maxTotalPoints }) {
  const percentage = (score / maxTotalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {maxTotalPoints} points (
        {Math.ceil(percentage)}%)
      </p>
      <RestartQuizBtn dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
