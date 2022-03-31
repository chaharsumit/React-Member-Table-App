let initialState = {
  isOpen: false,
  name: "",
  company: "",
  notes: "",
  status: ""
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "ON_COMPANY_INPUT_CHANGE":
      return { ...state, company: action.payload };
    case "ON_NAME_INPUT_CHANGE":
      return { ...state, name: action.payload };
    case "ON_STATUS_INPUT_CHANGE":
      return { ...state, status: action.payload };
    case "ON_NOTES_INPUT_CHANGE":
      return { ...state, notes: action.payload };
    case "CLEAR_MODAL_DATA":
      return {...state, name: "", company: "", status: "", notes: ""};
    default:
      return state;
  }
}

export default modalReducer;
