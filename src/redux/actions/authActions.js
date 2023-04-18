import AUTH_TYPES from '../types/authTypes';

export const resetState = () => ({
  type: AUTH_TYPES.RESET_STATE,
});

export const updateUserData = (data) => ({
  type: AUTH_TYPES.UPDATE_USER_DATA,
  payload: data,
});

export const loginBegin = () => ({
  type: AUTH_TYPES.LOGIN_BEGIN,
});

export const loginSuccess = (data) => ({
  type: AUTH_TYPES.LOGIN_SUCCESS,
  payload: data,
});

export const loginNo2FASuccess = (data) => ({
  type: AUTH_TYPES.LOGIN_NO_2FA_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: AUTH_TYPES.LOGIN_FAILURE,
  payload: { error },
});

export const refreshTokenSuccess = (data) => ({
  type: AUTH_TYPES.REFRESH_TOKEN_SUCCESS,
  payload: data,
});

export const changePasswordBegin = () => ({
  type: AUTH_TYPES.CHANGE_PASSWORD_BEGIN,
});

export const changePasswordSuccess = () => ({
  type: AUTH_TYPES.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailure = (error) => ({
  type: AUTH_TYPES.CHANGE_PASSWORD_FAILURE,
  payload: { error },
});

export const setSubmitting = (data) => ({
  type: AUTH_TYPES.SET_SUBMITTING,
  payload: data,
});


export const logout = () => ({
  type: AUTH_TYPES.LOGOUT,
});
