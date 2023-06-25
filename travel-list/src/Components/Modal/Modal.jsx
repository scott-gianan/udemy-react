import "./Modal.scss";

function Modal({ clearList, closeModal }) {
  return (
    <div className="backdrop">
      <div className="modal">
        <h3>Do you want to clear your list?</h3>
        <div className="button-container">
          <button onClick={clearList}>✔️</button>
          <button onClick={closeModal}>❌</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
