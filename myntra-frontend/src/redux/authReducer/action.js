import * as types from './actionTypes'
import axios from 'axios'

const loginRequest = ()=>{
   return{
       type:types.USER_LOGIN_REQUEST,
   }
}

const loginSuccess = (payload)=>{
   return{
       type:types.USER_LOGIN_SUCCESS,
       payload
   }
}

const loginFailure = ()=>{
   return{
       type:types.USER_LOGIN_FAILURE,
   }
}

export const login= (payload) =>(dispatch)=>{
      dispatch(loginRequest());
      return axios({
       method:'post',
       url:'/api/login',
       baseURL:'https://reqres.in',
       data:payload
      }).then((r)=>{
       return dispatch(loginSuccess(r.data.token))
      }).catch((e)=>{
        dispatch(loginFailure(e))
      })
}