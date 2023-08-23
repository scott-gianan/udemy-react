import { useQuestionsContext } from "../context/QuestionContextProvider";

function Error() {
  const { message } = useQuestionsContext();
  return (
    <p className="error">
      <span>💥</span> {message}
    </p>
  );
}

export default Error;
