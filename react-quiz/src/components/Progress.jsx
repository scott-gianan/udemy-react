function Progress({ index, numOfQuestions, currentPoints, maxTotalPoints }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + 1} />
      <p>
        Question: <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        Points: <strong>{currentPoints || 0}</strong> / {maxTotalPoints}
      </p>
    </header>
  );
}

export default Progress;
