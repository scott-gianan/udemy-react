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
        {isOpen ? "X" : "+"}
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
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePreviousStep}
              text="Previous"
              emoji="👈"
            />
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNextStep}
              text="Next"
              emoji="👉"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Button = ({ textColor, bgColor, onClick, text, emoji }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <span>{emoji}</span>
      {text}
    </button>
  );
};

export default App;
