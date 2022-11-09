import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { appReducer } from "./appReducer/appReducer";
import { authReducer } from "./authReducer/authReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ appReducer, authReducer });
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
