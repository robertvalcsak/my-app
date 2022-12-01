import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(function () {
    fetch(`http://127.0.0.1:2002`).then(function (response) {
      return response.json();
    })
    .then(function(data){
      setPizzas(data)
    });
  }, []);
  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza
          key={pizza.id}
          name={pizza.name}
          id={pizza.id}
          price={pizza.price}
          ingredients={pizza.ingredients}
          picture={pizza.picture}
        />
      ))}
    </div>
  );
}

export default Pizzas;
