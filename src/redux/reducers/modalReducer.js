const modal = {
  openModal: false,
};
const modalReducer = (state = modal, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        openModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
};

export { modalReducer };
