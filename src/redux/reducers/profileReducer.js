const initialState = {
  openEdit: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT/OPEN':
      return {
        ...state,
        openEdit: true,
      };
    case 'EDIT/CLOSE':
      return {
        ...state,
        openEdit: false,
      };
    default:
      return state;
  }
};

export { profileReducer };
