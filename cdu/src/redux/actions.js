import { KM_Mi,Mi_KM, PIE_MT, MT_PIE, CM_PUL, PUL_CM } from "./actionTypes";


export const km_mi =(val, conv)=>{
    return (dispatch) => conv ==="km" ? dispatch({type: KM_Mi, payload: val}) : dispatch({type: Mi_KM, payload: val})
}

export const pie_mt=(val, conv)=>{
    return (dispatch) => conv === "pies" ?  dispatch({type: PIE_MT, payload: val}) : dispatch({type: MT_PIE, payload: val})
}

export const cm_pu=(val, conv)=>{
    return (dispatch) => conv ==="cm" ? dispatch({type:CM_PUL, payload:val}) : (dispatch) => dispatch({type:PUL_CM, payload: val})
}