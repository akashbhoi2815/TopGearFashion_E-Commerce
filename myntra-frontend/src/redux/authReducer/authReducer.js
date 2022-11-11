import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.SIGNUP_REQUEST:
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
      case types.SET_USER:
      return{
        ...state,
        isLoading:false,
        currentUser:action.payload
      }
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;