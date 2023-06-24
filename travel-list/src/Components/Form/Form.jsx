import { range } from "lodash";
import { useId, useState } from "react";

export default function Form({ items, setItems }) {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    description: "",
    quantity: 0,
    isPacked: false,
  });
  const id = useId();
  console.log(items);
  const handleChangeQuantity = (event) => {
    console.log(event);
    if (event.target.value === 0) return;
    setFormData({
      ...formData,
      quantity: Number(event.target.value),
    });
  };
  const handleChangeDescription = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.quantity === 0 || formData.description === "") {
      return;
    }
    setItems([...items, formData]);
    setFormData({
      ...formData,
      id: crypto.randomUUID(),
      description: "",
      quantity: 0,
    });
  };
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <form onSubmit={handleSubmit}>
        <select value={formData.quantity} onChange={handleChangeQuantity}>
          {range(0, 21, 1).map((option) => {
            return option === 0 ? (
              <option key={`${id}-${option}`} value={option}>
                Select Quantity
              </option>
            ) : (
              <option key={`${id}-${option}`} value={option}>
                {option}
              </option>
            );
          })}
        </select>{" "}
        <input
          placeholder="Item..."
          value={formData.description}
          onChange={handleChangeDescription}
        />{" "}
        <button>Add</button>
      </form>
    </div>
  );
}