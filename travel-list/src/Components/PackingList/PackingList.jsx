import Item from "./Item/Item";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function PackingList({
  items,
  setItems,
  onDeleteItems,
  onToggleItems,
}) {
  const [showModal, setShowModal] = useState(false);

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
                onToggleItems={onToggleItems}
                removeItems={onDeleteItems}
              />
            );
          })}
        </ul>
        <button onClick={handleShowModal}>Clear List</button>
      </div>
    </>
  );
}
