//react
import { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";
// import Modal from "./Components/Modal/Modal";
function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      {/* <Modal /> */}
      <div className="app">
        <Logo />
        <Form items={items} setItems={setItems} />

        <PackingList items={items} setItems={setItems} />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
