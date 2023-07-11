//Components
import NumResults from "./NumResults/NumResults";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
