function Error({ err }) {
  return (
    <p className="error">
      <span>💥</span> {err}
    </p>
  );
}

export default Error;
