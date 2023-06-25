import Item from "./Item/Item";

export default function PackingList({ items, setItems }) {
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
  console.log(items);
  return (
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
    </div>
  );
}
