const initialState = {
  logged: false,
  showAdmin: false,
  currentUser: null,
  isError: false,
  errorText: '',
  openError: false,
  registrationErrorText: '',
  registrationError: false,
  success: false,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/LOG_IN':
      return {
        ...state,
        logged: true,
        success: false,
        currentUser: action.user,
      };
    case 'USER/LOG_OUT':
      return {
        ...state,
        logged: false,
        currentUser: null,
        success: false,
      };
    case 'ADMIN/LOG_IN':
      localStorage.setItem(
        'authReducer',
        JSON.stringify({ ...state, showAdmin: true, currentUser: action.admin })
      );
      return {
        ...state,
        showAdmin: true,
        currentUser: action.admin,
      };
    case 'ADMIN/LOG_OUT':
      localStorage.setItem(
        'authReducer',
        JSON.stringify({ ...state, showAdmin: false, currentUser: null })
      );
      return {
        ...state,
        showAdmin: false,
        currentUser: null,
      };
    case 'USER/LOG_IN_ERROR':
      return {
        ...state,
        isError: true,
        errorText: action.msg,
        openError: true,
      };
    case 'USER/CLOSE_ERROR':
      return {
        ...state,
        isError: false,
        openError: false,
      };
    case 'NEW_USER/ERROR':
      return {
        ...state,
        registrationErrorText: action.msg,
        registrationError: true,
      };
    case 'NEW_USER/CLOSE_ERROR':
      return {
        ...state,
        registrationError: false,
        openErrorRegistration: false,
      };
    case 'NEW_USER/SUCCESS':
      return {
        ...state,
        registrationError: false,
        success: true,
      };
    case 'NEW_USER/SUCCESS_CLOSE':
      return {
        ...state,
        success: false,
      };

    default:
      // localStorage.setItem('authReducer', JSON.stringify(state));
      return state;
  }
};

export { authorizationReducer };
