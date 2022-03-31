let initialState = {
  members: []
};

function memberReducer(state = initialState, action) {
  switch (action.type){
    case "PUSH_ALL_MEMBERS_TO_STATE":
      return { ...state, members: action.payload }
    default:
      return state;
  }
}

export default memberReducer;