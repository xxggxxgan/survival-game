const initialState = {
  isLogin: false
};

const LoginHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLogin: true
        // items: action.payload
      };
    case "LOG_OUT":
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};

export default LoginHandlerReducer;
