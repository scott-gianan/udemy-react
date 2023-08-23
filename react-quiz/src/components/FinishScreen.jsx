import { useMemo } from "react";
import { useQuestionsContext } from "../context/QuestionContextProvider";
import RestartQuizBtn from "./RestartQuizBtn";

function FinishScreen() {
  const { questions, score, dispatch, highScore } = useQuestionsContext();
  const maxTotalPoints = useMemo(() => {
    return questions.reduce((curr, acc) => curr + acc.points, 0);
  }, [questions]);
  const percentage = (score / maxTotalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 90 && percentage < 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 90) emoji = "🥈";
  if (percentage >= 70 && percentage < 80) emoji = "🥉";
  if (percentage >= 1 && percentage < 70) emoji = "👍";
  if (percentage === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{score}</strong> out of {maxTotalPoints}{" "}
        points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore : {highScore} points)</p>
      <RestartQuizBtn dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
