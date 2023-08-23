import React, { useContext, useReducer } from "react";
const QuestionContext = React.createContext();
const SECONDS_PER_QUESTION = 20;
const initialState = {
  questions: [],
  //status: loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: 0,
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error", message: action.payload };
    }
    case "start": {
      return {
        ...state,
        status: "active",
        secondsRemaining: SECONDS_PER_QUESTION * state.questions.length,
      };
    }
    case "tempAnswer": {
      return {
        ...state,
        answer: action.payload,
      };
    }
    case "newAnswer": {
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
    }
    case "finished": {
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    }
    case "nextQuestion": {
      return { ...state, answer: null, index: state.index++ };
    }
    case "restart": {
      return {
        ...initialState,
        secondsRemaining: SECONDS_PER_QUESTION * state.questions.length,
        highScore: state.highScore,
      };
    }
    case "countDown": {
      return { ...state, secondsRemaining: action.payload };
    }
    default: {
      throw Error("Unknown Action inside dispatcher: " + action.type);
    }
  }
};

export function QuestionContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    message,
    index,
    answer,
    points,
    highScore,
    secondsRemaining,
  } = state;
  return (
    <QuestionContext.Provider
      value={{
        questions,
        status,
        message,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestionsContext() {
  const questionContextValues = useContext(QuestionContext);
  return questionContextValues;
}
