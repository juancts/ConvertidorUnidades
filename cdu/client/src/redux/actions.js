import { KM_Mi, Mi_KM, PIE_MT, MT_PIE, CM_PUL, PUL_CM } from "./actionTypes";
import { post_conversion } from "../controllers/controllers.js";

export const km_mi = (val, conv) => {
  try {
    const apiData = { numero: val, tipo: conv };
    post_conversion(apiData);
    return (dispatch) =>
      conv === "km"
        ? dispatch({ type: KM_Mi, payload: val })
        : dispatch({ type: Mi_KM, payload: val });
  } catch (error) {
    console.error(error);
  }
};

export const pie_mt = (val, conv) => {
  try {
    const apiData = { numero: val, tipo: conv };
    fetch.post("http://localhost:4000/post", apiData);
    return (dispatch) =>
      conv === "pies"
        ? dispatch({ type: PIE_MT, payload: val })
        : dispatch({ type: MT_PIE, payload: val });
  } catch (error) {
    console.error(error);
  }
};

export const cm_pu = (val, conv) => {
  try {
    const apiData = { numero: val, tipo: conv };
    fetch("http://localhost:4000/post", apiData);
    return (dispatch) =>
      conv === "cm"
        ? dispatch({ type: CM_PUL, payload: val })
        : (dispatch) => dispatch({ type: PUL_CM, payload: val });
  } catch (error) {
    console.error(error);
  }
};
