import { useState, useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    if (secondsRemaining === 0) dispatch({ type: "finished" });
    setInterval(() => {
      dispatch({ type: "countDown", payload: secondsRemaining - 1 });
    }, 1000);
  }, [dispatch, secondsRemaining]);
  return (
    <div className="btn btn-ui">{`${minutes} : ${
      seconds >= 10 ? seconds : `0${seconds}`
    }`}</div>
  );
}

export default Timer;
