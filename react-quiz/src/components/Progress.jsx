function Progress({ index, numOfQuestions, currentPoints, maxTotalPoints }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index} />
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
