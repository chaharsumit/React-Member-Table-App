export function login(email, userId){
  return {
    type: "LOGIN",
    payload: {
      email: email,
      userId: userId
    }
  }
}

export function signUp(email, userId){
  return {
    type: "SIGN_UP",
    payload: {
      email: email,
      userId: userId
    }
  }
}

export function emailChange(value){
  return {
    type: "ON_EMAIL_INPUT_CHANGE",
    payload: value
  }
}

export function passwordChange(value){
  return {
    type: "ON_PASSWORD_INPUT_CHANGE",
    payload: value
  }
}

export function clearInfo(){
  return {
    type: "CLEAR_INFO_FIELDS",
  }
}