import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import useToggleDarkMode from "./hooks/useToggleDarkMode";
function App() {
  const [isFakeDark, toggleDarkMode] = useToggleDarkMode();
  return (
    <section>
      <button onClick={toggleDarkMode} className="btn-fake-dark-mode">
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
