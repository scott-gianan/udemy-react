import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
const Steps = () => {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const handlePreviousStep = () => {
    if (step === 0) {
      setStep((prevStep) => 2);
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const handleNextStep = () => {
    if (step === 2) {
      setStep((prevStep) => 0);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggle} className="close">
        X
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : null}>1</div>
            <div className={step >= 1 ? "active" : null}>2</div>
            <div className={step >= 2 ? "active" : null}>3</div>
          </div>
          <p className="message">
            Step: {step + 1} {messages[step]}
          </p>
          <div className="buttons">
            <button onClick={handlePreviousStep} className="btn">
              Previous
            </button>
            <button onClick={handleNextStep} className="btn">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
