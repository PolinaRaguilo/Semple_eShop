const initialState = {
  logged: false,
  showAdmin: false,
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
      };
    default:
      return state;
  }
};

export { authorizationReducer };
