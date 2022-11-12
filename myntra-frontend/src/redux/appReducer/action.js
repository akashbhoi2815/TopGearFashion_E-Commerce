import * as types from './actionTypes'
import axios from 'axios'

const getMenRequest = ( )=>{
    return {
        type:types.GETMEN_REQUEST 
    }
}
const getWomenRequest = ( )=>{
    return {
        type:types.GETWOMEN_REQUEST 
    }
}

export const getMenData = (params)=>(dispatch)=>{
     dispatch(getMenRequest())
     return axios.get("http://localhost:8080/mensdata",params)
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
export const getwomenData = (params)=>(dispatch)=>{
    dispatch(getWomenRequest())
    return axios.get("http://localhost:8080/womensdata",params)
      .then((r)=>{
       return dispatch({
           type:types.GETWOMEN_SUCCESS,
           payload:r.data
       })
      })
      .catch((e)=>{
       return dispatch({
           type:types.GETWOMEN_FAILURE,
           payload:e
       })
      })
}