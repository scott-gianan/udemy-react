import { useState, useEffect } from "react";
import "./Modal.scss";

function Modal({ clearList, closeModal }) {
  console.log("modal rendered");
  const [toggleModal, setToggleModal] = useState(true);
  const backdropCloseModal = () => {
    setToggleModal((currentValue) => !currentValue);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      const escapeKey = event.key === "Escape";
      if (escapeKey) {
        setToggleModal((currentValue) => !currentValue);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    toggleModal && (
      <div className="backdrop" onClick={backdropCloseModal}>
        <div className="modal">
          <h3>Do you want to clear your list?</h3>
          <div className="button-container">
            <button onClick={clearList}>✔️</button>
            <button onClick={closeModal}>❌</button>
          </div>
        </div>
      </div>
    )
  );
}
export default Modal;
