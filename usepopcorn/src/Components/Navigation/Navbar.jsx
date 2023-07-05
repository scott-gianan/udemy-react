//Components
import NumResults from "./NumResults/NumResults";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

export default Navbar;
