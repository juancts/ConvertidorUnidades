import {
  KM_Mi,
  Mi_KM,
  PIE_MT,
  MT_PIE,
  CM_PUL,
  PUL_CM,
} from "./actionTypes";

const initialState = {
  resultados: [],
  nuevosresultados: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //KILOMETROS A MILLAS
    case KM_Mi:
      var millas = payload * 0.621371;
      const resultadosAnteriores = JSON.parse(localStorage.getItem('resultados')) || [];
      const nuevosResultados = [...resultadosAnteriores, millas];
      localStorage.setItem('resultados', JSON.stringify(nuevosResultados));
      console.log("RESULTADOS ANTERIORES:", resultadosAnteriores)
      console.log("RESULTADOS nuevos:", nuevosResultados)
      console.log("LOCAL STORAGE", localStorage)
      return {
        ...state,
        nuevosresultados: [millas],
        resultados: nuevosResultados,
        
      };
    //MILLAS A KILOMETROS
    case Mi_KM:
      var kilometros = payload * 1.60934;
      return {
        ...state,
        nuevosresultados: [...state.nuevosresultados, kilometros],
        
      };
    //PIES A METROS
    case PIE_MT:
      var metros = payload * 0.3048;
      return {
        ...state,
        nuevosresultados: [...state.nuevosresultados, metros],
        
      };
    //METROS A PIES
    case MT_PIE:
      var pies = payload / 0.3048;
      return {
        ...state,
        nuevosresultados: [...state.nuevosresultados, pies],
        
      };
    //CENTIMETROS A PULGADAS
    case CM_PUL:
      var pulgadas = payload / 2.54;
      return {
        ...state,
        nuevosresultados: [...state.nuevosresultados, pulgadas],
        
      };
    //PULGADAS A CENTIMETROS
    case PUL_CM:
      var cm = payload * 2.54;
      return {
        ...state,
        nuevosresultados: [...state.nuevosresultados, cm],
        
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
