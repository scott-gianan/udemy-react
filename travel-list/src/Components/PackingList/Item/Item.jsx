export default function Item({ item, removeItems, onToggleItems }) {
  const { description, quantity, isPacked, id } = item;
  const listStyle = {
    textDecoration: isPacked ? "line-through" : "none",
  };

  return (
    <li>
      <input
        type="checkbox"
        value={isPacked}
        checked={isPacked}
        onChange={() => onToggleItems(id)}
      />
      <span style={listStyle}>{`${quantity} ${description}`}</span>
      <button onClick={() => removeItems(id)}>❌</button>
    </li>
  );
}
