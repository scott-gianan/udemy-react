//components
import ToggleButton from "../ToggleButton/ToggleButton";
//custom hooks
import useToggle from "../../Hooks/useToggle";
function Box({ children }) {
  const [isOpen, toggle] = useToggle();
  return (
    <div className="box">
      <ToggleButton onClick={toggle}>{isOpen ? "–" : "+"}</ToggleButton>
      {isOpen && children}
    </div>
  );
}

export default Box;
