import {
  KM_Mi,
  Mi_KM,
  PIE_MT,
  MT_PIE,
  CM_PUL,
  PUL_CM,
} from "./actionTypes";

const initialState = {
  resultados: {},
  kmmi: [],
  mikm: [],
  piemt: [],
  mtpie: [],
  cmpul: [],
  pulcm: [],
  nuevosresultados: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //KILOMETROS A MILLAS
    case KM_Mi:
      var millas = payload * 0.621371;
      return {
        ...state,
        nuevosresultados: millas,
        kmmi: millas,
      };
    //MILLAS A KILOMETROS
    case Mi_KM:
      var kilometros = payload * 1.60934;
      return {
        ...state,
        nuevosresultados: kilometros,
        mikm: kilometros,
      };
    //PIES A METROS
    case PIE_MT:
      var metros = payload * 0.3048;
      return {
        ...state,
        nuevosresultados: metros,
        piemt: metros,
      };
    //METROS A PIES
    case MT_PIE:
      var pies = payload / 0.3048;
      return {
        ...state,
        nuevosresultados: pies,
        mtpie: pies,
      };
    //CENTIMETROS A PULGADAS
    case CM_PUL:
      var pulgadas = payload / 2.54;
      return {
        ...state,
        nuevosresultados: pulgadas,
        cmpul: pulgadas,
      };
    //PULGADAS A CENTIMETROS
    case PUL_CM:
      var cm = payload * 2.54;
      return {
        ...state,
        nuevosresultados: cm,
        pulcm: cm,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
