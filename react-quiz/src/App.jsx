import { useEffect } from "react";
import { useQuestionsContext } from "./context/QuestionContextProvider";
//components
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

import "./App.css";

function App() {
  const { status, questions, dispatch } = useQuestionsContext();
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(`${import.meta.env.VITE_SOME_KEY}`);
        const data = await response.json();
        if (!data) {
          throw new Error("Error fetching data");
        }
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed", payload: error.message });
      }
    }

    if (!questions.length) {
      fetchQuestions();
    }
  }, [questions.length, dispatch]);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
