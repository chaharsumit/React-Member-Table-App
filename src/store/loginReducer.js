let initialState = {
  email: '',
  password: '',
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_EMAIL_INPUT_CHANGE":
      return {...state, email: action.payload};
    case "ON_PASSWORD_INPUT_CHANGE":
      return {...state, password: action.payload};
      case "CLEAR_INFO_FIELDS":
        return {...state, password: '', email: ''};
    default:
      return state;
  }
}

export default loginReducer;