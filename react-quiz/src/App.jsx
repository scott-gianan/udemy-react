//components
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import "./App.css";
import { useEffect, useReducer } from "react";
const initialState = {
  questions: [],
  //status: loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error", message: action.payload };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const currentQuestion = state.questions[state.index];
      const { correctOption, points } = currentQuestion;
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index++ };
    default:
      throw new Error("Unknown Action");
  }
};
function App() {
  const [{ questions, status, message, index, answer, points }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        if (!data) {
          throw new Error("Error fetching data");
        }
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed", payload: error.message });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error err={message} />}
        {status === "ready" && (
          <StartScreen quizItemsLength={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            currentQuestion={questions[index]}
            dispatch={dispatch}
            answer={answer}
            key={index}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
