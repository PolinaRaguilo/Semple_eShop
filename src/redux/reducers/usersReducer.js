const users = [
  // { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'iv2020@mail.ru' },
  // { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'pp2020@mail.ru' },
  // { id: 3, firstName: 'Влад', lastName: 'Сидоров', email: 'vl2020@mail.ru' },
];

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case 'USERS/RECEIEVE_USERS':
      return action.users;
    case 'DELETE_USERS':
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
};

export { usersReducer };
