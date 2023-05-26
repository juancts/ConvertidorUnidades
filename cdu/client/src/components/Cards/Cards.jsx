import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styles from "./Cards.module.css";

function Cards() {
  const datosguardados = useSelector((state) => state.resultados);

  console.log("DATOS GUARDADOS:", datosguardados);
  const gruposDeTarjetas = [];
  for (let i = 0; i <= 9; i++) {
    datosguardados[i] !== undefined && gruposDeTarjetas.push(datosguardados[i]);
  }
  console.log("grupotarjetas", gruposDeTarjetas);
  gruposDeTarjetas.map((e, index) => console.log("MAP:", e.numero));

  return (
    
        <div className={styles.container}>
      {gruposDeTarjetas.length > 0 &&
        gruposDeTarjetas.map((e, index) => (
          <div align="center"  key={index}>
            <Card numero={e.numero} tipo={e.tipo} />
          </div>
        ))}
        </div>
    
  );
}

export default Cards;
