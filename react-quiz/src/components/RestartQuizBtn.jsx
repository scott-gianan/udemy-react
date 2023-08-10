function RestartQuizBtn({ dispatch }) {
  return (
    <button className="btn" onClick={() => dispatch({ type: "restart" })}>
      Try again?
    </button>
  );
}

export default RestartQuizBtn;
