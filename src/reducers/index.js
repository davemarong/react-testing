import { combineReducers } from "redux";
import { user_info } from "./usernameReducer";
import { password_info } from "./passwordReducer";

export const allReducers = combineReducers({
  user: user_info,
  password: password_info,
});
