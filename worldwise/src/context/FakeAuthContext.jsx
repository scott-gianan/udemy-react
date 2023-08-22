import React, { useContext, useReducer, useState } from "react";

const AuthContext = React.createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
  }
  throw new Error("Invalid ActioN! " + action.type);
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = state;
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext was used outisde the Auth Provider");
  }
  return context;
}
export default AuthContextProvider;
