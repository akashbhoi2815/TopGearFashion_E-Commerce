import * as types from "./actionTypes";
let auth = false;
import axios, { Axios } from "axios";
const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
const signupSuccess = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload,
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
const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
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

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};

export const signup = (payload) => (dispatch) => {
  dispatch(signupRequest());
  return axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/signup",
    baseURL: "https://topgearfashion.onrender.com",
    data: payload,
  })
    .then((r) => {
      console.log(r);
      if (r.data == "User already Exist Try to login") {
        alert("User already Exist Please Try To Login");
      } else {
        alert("Signup Successfully");
      }
      return dispatch(signupSuccess(r));
    })
    .catch((e) => {
      dispatch(signupFailure(e));
    });
};

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/login",
    baseURL: "https://topgearfashion.onrender.com",
    data: payload,
  })
    .then((r) => {
      console.log('r: ', r);

      if (r.data.msg == "Login Failed") {
        alert("Login Failed");
      } else {
        alert("Login Successfully");
        console.log("token", r.data.token);
      }
      localStorage.setItem("token", r.data.token);
      return dispatch(loginSuccess(r));
    })
    .catch((e) => {
      dispatch(loginFailure(e));
    });
};

export const logoutInit = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFailure(error.massage)));
  };
};
