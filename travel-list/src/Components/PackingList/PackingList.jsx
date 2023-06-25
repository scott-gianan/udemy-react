import Item from "./Item/Item";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function PackingList({ items, setItems }) {
  const [showModal, setShowModal] = useState(false);
  const toggleIsPacked = (i) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return item.id === i.id ? { ...item, isPacked: !item.isPacked } : item;
      });
    });
  };
  const removeItem = (i) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== i.id;
      });
    });
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleClearList = () => {
    setItems([]);
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && (
        <Modal clearList={handleClearList} closeModal={handleShowModal} />
      )}
      <div className="list">
        <ul>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                toggleIsPacked={toggleIsPacked}
                removeItem={removeItem}
              />
            );
          })}
        </ul>
        <button onClick={handleShowModal}>Clear List</button>
      </div>
    </>
  );
}
