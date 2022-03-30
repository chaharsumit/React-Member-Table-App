let initialState = {
  email: "",
  userId: ""
};

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId
      };
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId
      };
    case "LOGOUT":
      return {
        ...state,
        email: "",
        userId: ""
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId
      };
    default:
      return state;
  }
}

export default authenticationReducer;
