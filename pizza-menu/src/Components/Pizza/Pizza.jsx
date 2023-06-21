function Pizza({ name, photoName, price, ingredients, isSoldOut }) {
  return (
    <div className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price + 3}</span>
    </div>
  );
}
export default Pizza;
