export const userLogin = user => {
  return {
    type: 'USER/LOG_IN',
    user,
  };
};

export const userLogout = () => {
  return {
    type: 'USER/LOG_OUT',
  };
};

export const adminLogin = admin => {
  return {
    type: 'ADMIN/LOG_IN',
    admin,
  };
};

export const adminLogout = () => {
  return {
    type: 'ADMIN/LOG_OUT',
  };
};

export const errorLogin = msg => {
  return {
    type: 'USER/LOG_IN_ERROR',
    msg,
  };
};

export const errorNewUser = msg => {
  return {
    type: 'NEW_USER/ERROR',
    msg,
  };
};

export const onCloseError = () => {
  return {
    type: 'USER/CLOSE_ERROR',
  };
};

export const onCloseErrorReg = () => {
  return {
    type: 'NEW_USER/CLOSE_ERROR',
  };
};

export const onSuccessRegistration = () => {
  return {
    type: 'NEW_USER/SUCCESS',
  };
};

export const onSuccessHide = () => {
  return {
    type: 'NEW_USER/SUCCESS_CLOSE',
  };
};
