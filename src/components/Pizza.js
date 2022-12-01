import React, { useEffect, useState } from "react";
import "./Pizza.css";

function Pizza({ name, id, ingredients, price, picture }) {
  // const pizzaName = pizzaData.name
  // const {name} = pizzaData
  const [isFavorite, setIsFavorite] = useState();

  useEffect(
    function () {
      // console.log(isFavorite);
    }
    // [isFavorite]
  );

  return (
    <div className={"Pizza" + (isFavorite ? " fav" : "")}>
      <img
        onClick={() => setIsFavorite(!isFavorite)}
        src={
          isFavorite
            ? "https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png"
            : "https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
        }
        alt="star"
        className="favorite"
      />

      <h1>
        {name} {isFavorite ? "Kedvenc" : "Nem kedvenc"}
      </h1>
      <p>Sorszám: {id}</p>
      <h3>Összetevők : {ingredients}</h3>
      <h2>{price} Ft</h2>
      <img src={"pictures/" + picture} alt="pizza_picture" />
    </div>
  );
}

export default Pizza;
