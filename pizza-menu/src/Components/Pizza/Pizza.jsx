function Pizza({ name, photoName, price, ingredients, isSoldOut }) {
  //if (isSoldOut) return null;
  return (
    <li className={`pizza ${isSoldOut ? "sold-out" : null}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{isSoldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
export default Pizza;
