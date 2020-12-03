const users = [
  { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'iv2020@mail.ru' },
  { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'pp2020@mail.ru' },
  { id: 3, firstName: 'Влад', lastName: 'Сидоров', email: 'vl2020@mail.ru' },
];

const usersReducer = (state = users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { usersReducer };
