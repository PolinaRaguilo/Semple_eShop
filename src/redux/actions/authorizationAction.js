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

export const addCurrentUser = user => {
  return {
    type: 'CURRENT_USER',
    user,
  };
};

export const errorLogin = msg => {
  return {
    type: 'USER/LOG_IN_ERROR',
    msg,
  };
};

export const onCloseError = () => {
  return {
    type: 'USER/CLOSE_ERROR',
  };
};
