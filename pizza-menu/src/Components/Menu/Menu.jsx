import React from "react";
import Pizza from "../Pizza/Pizza";
import { pizzaData } from "../../assets/data.jsx";
import React, { useId } from "react";
export default function Menu() {
  const pizzaId = useId;
  const numOfPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone ove, organic and delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map(
              ({ name, ingredients, price, photoName, soldOut }) => (
                <Pizza
                  key={`${name}-${pizzaId}`}
                  name={name}
                  photoName={photoName}
                  ingredients={ingredients}
                  price={price}
                  isSoldOut={soldOut}
                />
              )
            )}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}
