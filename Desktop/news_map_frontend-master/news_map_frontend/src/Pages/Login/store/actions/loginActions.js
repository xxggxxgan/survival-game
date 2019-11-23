import { LOG_IN, LOG_OUT } from "./types";

export function login() {
  return function(dispatch) {
    dispatch({
      type: LOG_IN
      //   payload:
    });
  };
}

export function logout() {
  return function(dispatch) {
    dispatch({
      type: LOG_OUT
      //   payload:
    });
  };
}
