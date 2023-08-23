import { useMemo } from "react";
import { useQuestionsContext } from "../context/QuestionContextProvider";

function Progress() {
  const { questions, index, points } = useQuestionsContext();
  const numOfQuestions = questions.length;
  const maxTotalPoints = useMemo(() => {
    return questions.reduce((curr, acc) => curr + acc.points, 0);
  }, [questions]);
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + 1} />
      <p>
        Question: <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        Points: <strong>{points || 0}</strong> / {maxTotalPoints || 0}
      </p>
    </header>
  );
}

export default Progress;
