const initialState = {
  logged: false,
  showAdmin: false,
  currentUser: null,
  emailError: false,
  emailErrorText: '',
  pswdError: false,
  pswdErrorText: '',
  openError: false,
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
    case 'USER/LOG_IN_ERR_EMAIL':
      return {
        ...state,
        emailError: true,
        emailErrorText: action.msg,
        openError: true,
      };
    case 'USER/LOG_IN_ERR_PASSWORD':
      return {
        ...state,
        pswdError: true,
        pswdErrorText: action.msg,
        openError: true,
      };
    case 'USER/CLOSE_ERROR':
      return {
        ...state,
        emailError: false,
        pswdError: false,
        openError: false,
      };
    default:
      return state;
  }
};

export { authorizationReducer };
