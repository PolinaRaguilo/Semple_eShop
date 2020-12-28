const initialState = {
  logged: false,
  showAdmin: false,
  currentUser: null,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/LOG_IN':
      return {
        ...state,
        logged: true,
      };
    case 'USER/LOG_OUT':
      return {
        ...state,
        logged: false,
        currentUser: null,
      };
    case 'ADMIN/LOG_IN':
      return {
        ...state,
        showAdmin: true,
      };
    case 'ADMIN/LOG_OUT':
      return {
        ...state,
        showAdmin: false,
        currentUser: null,
      };
    case 'CURRENT_USER':
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};

export { authorizationReducer };
