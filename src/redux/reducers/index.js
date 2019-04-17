import {combineReducers} from "redux";
import modalReducer from "./modalReducer";
import socialAuthReducer from "./authReducer";

export default combineReducers({
  modal: modalReducer,
  socialAuth: socialAuthReducer
});