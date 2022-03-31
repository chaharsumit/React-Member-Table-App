let initialState = {
  companyDropdownIsOpen: false,
  statusDropdownIsOpen: false,
  companyFilter: [],
  statusFilter: ""
}


function filterReducer(state = initialState, action) {
  let stateClone = {...state};
  let tempArr = stateClone.companyFilter;
  switch (action.type) {
    case "TOGGLE_COMPANY_DROPDOWN_DISPLAY":
      return {...state, companyDropdownIsOpen: !state.companyDropdownIsOpen};
    case "TOGGLE_STATUS_DROPDOWN_DISPLAY":
      return {...state, statusDropdownIsOpen: !state.statusDropdownIsOpen};
    case "HANDLE_COMPANY_FILTER":
      console.log(action.payload);
      if(action.payload.id === 'selectAll'){
        tempArr = action.payload.companies;
        return {...state, companyFilter: tempArr};
      }else{
        tempArr.push(action.payload.id);
        return {...state, companyFilter: tempArr};
      }
    case "REMOVE_FILTER_FROM_COMPANY_FILTER":
      if(action.payload.id === 'selectAll'){
        tempArr = [];
      }else{
        console.log(action.payload.id, tempArr);  
        tempArr = tempArr.filter(item => item !== action.payload.id);
        console.log(tempArr);
      }
      return {...state, companyFilter: tempArr};
    case "REMOVE_FILTER_FROM_STATUS_FILTER":
      console.log('ss')
      return { ...state, statusFilter: "" }
    case "ADD_FILTER_TO_STATUS_FILTER":
      console.log('bb')
      return { ...state, statusFilter: action.payload }
    default:
      return state;
  }
}

export default filterReducer;