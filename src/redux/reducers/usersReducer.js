// const users = [
//   // { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'iv2020@mail.ru' },
//   // { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'pp2020@mail.ru' },
//   // { id: 3, firstName: 'Влад', lastName: 'Сидоров', email: 'vl2020@mail.ru' },
// ];

const initialState = {
  usersAdmin: [],
  loading: false,
  failLoading: false,
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

export { usersReducer };
