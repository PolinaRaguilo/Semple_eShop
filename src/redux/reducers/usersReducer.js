const initialState = {
  usersAdmin: [],
  loading: false,
  error: false,
  typeError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS/RECEIEVE_USERS':
      return {
        ...state,
        usersAdmin: action.users,
        loading: false,
      };
    case 'USERS/REQUEST_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'USERS/FAIL_LOAD':
      return {
        ...state,
        error: true,
        typeError: action.error,
      };
    default:
      return state;
  }
};

export { usersReducer };
