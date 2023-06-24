//react
import { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";
function App() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      description: "Passports",
      quantity: 2,
      isPacked: false,
    },
    {
      id: crypto.randomUUID(),
      description: "Socks",
      quantity: 12,
      isPacked: false,
    },
  ]);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
