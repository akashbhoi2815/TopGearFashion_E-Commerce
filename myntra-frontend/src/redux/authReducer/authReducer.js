import * as types from './actionTypes';

const initState={
   isAuth:false,
   token:'',
   isLoading:false,
   isError:false,
}

export const authReducer=(oldState=initState,{type,payload})=>{
   switch(type){
       case types.USER_LOGIN_REQUEST:{
           return{
               ...oldState,
               isLoading:true
           }
       } 
       case types.USER_LOGIN_SUCCESS:{
           return{
               ...oldState,
               isLoading:false,
               isError:false,
               isAuth:true,
               token:payload
           }
       }
       case types.USER_LOGIN_FAILURE:{
           return{
               ...oldState,
               isAuth:false,
               isLoading:false,
               token:"",
               isError:true,
           }
       }

       default:
           return oldState
   }
}