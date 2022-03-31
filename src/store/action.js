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

export function setLoggedUser(data){
  return {
    type: "SET_CURRENT_USER",
    payload: data
  }
}

export function logout(){
  return {
    type: "LOGOUT"
  }
}

export function fillMembers(data){
  return {
    type: "PUSH_ALL_MEMBERS_TO_STATE",
    payload: data,
  }
}

export function filterCompany(id, companies){
  return {
    type: "HANDLE_COMPANY_FILTER",
    payload: {
      id: id,
      companies: companies
    }
  }
}

export function removeFromCompanyFilter(id){
  return {
    type: "REMOVE_FILTER_FROM_COMPANY_FILTER",
    payload: {
      id: id,
    }
  }
}

export function removeFromStatusFilter(id){
  return {
    type: "REMOVE_FILTER_FROM_STATUS_FILTER",
    payload: id
  }
}

export function filterStatus(id){
  return {
    type: "ADD_FILTER_TO_STATUS_FILTER",
    payload: id 
  }
}

export function toggleStatus(){
  return {
    type: "TOGGLE_STATUS_DROPDOWN_DISPLAY"
  }
}

export function toggleCompany(){
  return {
    type: "TOGGLE_COMPANY_DROPDOWN_DISPLAY"
  }
}

export function toggleModal(){
  return {
    type: "TOGGLE"
  }
}

export function nameChange(value){
  return {
    type: "ON_NAME_INPUT_CHANGE",
    payload: value
  }
}

export function companyChange(value){
  return {
    type: "ON_COMPANY_INPUT_CHANGE",
    payload: value
  }
}

export function notesChange(value){
  return {
    type: "ON_NOTES_INPUT_CHANGE",
    payload: value
  }
}

export function statusChange(value){
  return {
    type: "ON_STATUS_INPUT_CHANGE",
    payload: value
  }
}

export function clearModalData(){
  return {
    type: "CLEAR_MODAL_DATA"
  }
}