export default function Item({ item, toggleIsPacked, removeItem }) {
  const { description, quantity, isPacked } = item;
  const listStyle = {
    textDecoration: isPacked ? "line-through" : "none",
  };

  return (
    <li>
      <input
        type="checkbox"
        value={isPacked}
        checked={isPacked}
        onChange={() => toggleIsPacked(item)}
      />
      <span style={listStyle}>{`${quantity} ${description}`}</span>
      <button onClick={() => removeItem(item)}>❌</button>
    </li>
  );
}
