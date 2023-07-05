import MovieList from "./MovieList/MovieList";
//custom hooks
import useToggle from "../../../Hooks/useToggle";
//Components
import ToggleButton from "../../ToggleButton/ToggleButton";
function ListBox() {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="box">
      <ToggleButton onClick={toggle}>{isOpen ? "–" : "+"}</ToggleButton>
      {isOpen && <MovieList />}
    </div>
  );
}

export default ListBox;
