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
    case 'DELETE_USERS':
      return {
        ...state,
        usersAdmin: state.usersAdmin.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
};
console.log(initialState.usersAdmin);
export { usersReducer };
