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
  const handleAddItems = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };
  const handleDeleteItems = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  const handleToggleItems = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === id ? { ...item, isPacked: !item.isPacked } : item;
      });
    });
  };
  return (
    <>
      {/* <Modal /> */}
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />

        <PackingList
          items={items}
          setItems={setItems}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
