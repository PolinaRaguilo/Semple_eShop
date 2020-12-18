export const userLogin = () => {
  return {
    type: 'USER/LOG_IN',
  };
};

export const userLogout = () => {
  return {
    type: 'USER/LOG_OUT',
  };
};

export const adminLogin = () => {
  return {
    type: 'ADMIN/LOG_IN',
  };
};

export const adminLogout = () => {
  return {
    type: 'ADMIN/LOG_OUT',
  };
};
