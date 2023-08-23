import { useEffect } from "react";
import { useQuestionsContext } from "../context/QuestionContextProvider";

function Timer() {
  const { dispatch, secondsRemaining } = useQuestionsContext();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    if (secondsRemaining === 0) dispatch({ type: "finished" });
    const intervalId = setInterval(() => {
      dispatch({ type: "countDown", payload: secondsRemaining - 1 });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, secondsRemaining]);
  return (
    <div className="btn btn-ui">{`${minutes} : ${
      seconds >= 10 ? seconds : `0${seconds}`
    }`}</div>
  );
}

export default Timer;
