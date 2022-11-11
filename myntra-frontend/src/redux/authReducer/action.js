import * as types from "./actionTypes";
let auth=""
import axios, { Axios } from 'axios';
const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
const signupSuccess = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload
  };
};
const signupFailure = (error) => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error,
  };
};

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
};

const logoutRequest = () => {
  return {
    type: types.LOGOUT_REQUEST,
  };
};
const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_FAILURE,
    payload: error,
  };
};

export const setUser =(user)=>{
  return{
   type:types.SET_USER,
   payload:user
  }
}

export const signupInit = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(signupRequest());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        alert("SignUp Successfull")
        dispatch(signupSuccess(user));
      })
      .catch((error) => {
        alert("SignUp failed")
        dispatch(signupFailure(error))});
  };
};



// export const loginInit = (email, password) => {
//   return function (dispatch) {
//     dispatch(loginRequest());
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         alert("Login Successfull")
//         dispatch(loginSuccess(user));
//       })
//       .catch((error) => {
//         alert("Login Failed")
//         dispatch(loginFailure(error.massage))});
//   };
// };


export const signup= (payload) =>(dispatch)=>{
  dispatch(signupRequest());
  return axios({
   method:'post',
   headers: {
    'Content-Type': 'application/json'
    },
   url:'/signup', 
   baseURL:'https://topgearfashion.onrender.com',
   data:payload
  }).then((r)=>{
    console.log(r);
    
   return dispatch(signupSuccess(r))
  }).catch((e)=>{
    dispatch(signupFailure(e))
  })
}


export const login= (payload) =>(dispatch)=>{
  dispatch(loginRequest());
  return axios({
   method:'post',
   headers: {
    'Content-Type': 'application/json'
    },
   url:'/login', 
   baseURL:'https://topgearfashion.onrender.com',
   data:payload,
  }).then((r)=>{
    console.log(r.data.token);
   return dispatch(loginSuccess(r))
    
  }).catch((e)=>{
    dispatch(loginFailure(e))
  })
}


export const logoutInit = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFailure(error.massage)));
  };
};