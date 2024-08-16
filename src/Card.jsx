import React from "react";

function Card({ input1, input2 }) {
  return (
    <div>
      <h2>Información Ingresada:</h2>
      <p>Color Favorito: {input1}</p>
      <p>Descripción: {input2}</p>
    </div>
  );
}

export default Card;
