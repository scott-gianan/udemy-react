import Pizza from "../Pizza/Pizza";
import { pizzaData } from "../../assets/data.jsx";
import { useId } from "react";
export default function Menu() {
  const pizzaId = useId;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map(({ name, ingredients, price, photoName, soldOut }) => (
          <Pizza
            key={`${name}-${pizzaId}`}
            name={name}
            photoName={photoName}
            ingredients={ingredients}
            price={price}
            isSoldOut={soldOut}
          />
        ))}
      </div>
    </main>
  );
}
