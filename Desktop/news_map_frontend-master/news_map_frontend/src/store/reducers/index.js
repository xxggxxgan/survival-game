import { combineReducers } from "redux";
import LoginHandlerReducer from "../../Pages/Login/store/reducers/LoginReducer";

export default combineReducers({
  LoginHandler: LoginHandlerReducer
});
