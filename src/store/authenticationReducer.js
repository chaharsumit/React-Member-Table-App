let initialState = {
  email: "",
  userId: "",
};

function authenticationReducer(state = initialState, action) {

  switch (action.type) {
    case "SIGN_UP":
      console.log(action.payload);
      return {...state, email: action.payload.email, userId: action.payload.userId};
    case "LOGIN":
      console.log(action.payload);
      return { ...state, email: action.payload.email, userId: action.payload.userId };
    default:
      return state;
  }
}

export default authenticationReducer;