function Button({ addOnClick, children }) {
  return (
    <button className="button" onClick={addOnClick}>
      {children}
    </button>
  );
}
export default Button;
