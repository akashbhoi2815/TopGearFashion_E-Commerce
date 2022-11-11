import * as types from './actionTypes'
import axios from 'axios'

const getMenRequest = ( )=>{
    return {
        type:types.GETMEN_REQUEST 
    }
}

export const getMenData = (params)=>(dispatch)=>{
     dispatch(getMenRequest())
     return axios.get("https://topgearfashion.onrender.com/tgf/mensdata",params)
       .then((r)=>{
        return dispatch({
            type:types.GETMEN_SUCCESS,
            payload:r.data
        })
       })
       .catch((e)=>{
        return dispatch({
            type:types.GETMEN_FAILURE,
            payload:e
        })
       })
}