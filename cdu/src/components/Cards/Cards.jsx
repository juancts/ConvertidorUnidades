import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Cards() {
  const datosguardados = useSelector((state) => state.resultados);

  console.log("DATOS GUARDADOS:", datosguardados)
  const gruposDeTarjetas = [];
  for (let i = 0; i <= 5; i ++) {
    gruposDeTarjetas.push(datosguardados[i]);
  }
  console.log("grupotarjetas",gruposDeTarjetas)

  return (
    <div>
    {gruposDeTarjetas.map((e, index) => (
      <div key={index}>
        <Card key={index} datosguardados={e} />
      </div>
    ))}
  </div>
);
}

export default Cards;
