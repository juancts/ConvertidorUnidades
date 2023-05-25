import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Converter.module.css";
import { cm_pu, km_mi, pie_mt } from "../../redux/actions";

function Converter() {
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState("");
  const ultimoresultado = useSelector((state)=>state.nuevosresultados)

  const dispatch = useDispatch();

  const selectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (selectedOption === "km" || selectedOption === "millas")
      dispatch(km_mi(value, selectedOption));
    if (selectedOption === "pies" || selectedOption === "metros")
      dispatch(pie_mt(value, selectedOption));
    if (selectedOption === "cm" || selectedOption === "pulgadas")
      dispatch(cm_pu(value, selectedOption));
    console.log("selectedoption:", selectedOption);
    console.log("VALUE:", value);
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>convert</span>
      </div>
      <div className={styles.data}>
        <select id="mySelect" value={selectedOption} onChange={selectChange}>
          <option value="">Seleccionar</option>
          <option value="km">Km a millas</option>
          <option value="millas">millas a km</option>
          <option value="pies">pies a mts</option>
          <option value="mts">mts a pies</option>
          <option value="cm">cm a pulgadas</option>
          <option value="pulgadas">Pulgadas a cm</option>
        </select>
        <input type="number" placeholder="100" onChange={inputChange} />
        {selectedOption && <p>{selectedOption}</p>}
      </div>
      <div className={styles.data2}>
        <div>❤</div>
        <div>{ultimoresultado}</div>
      </div>
    </div>
  );
}

export default Converter;
