import {
  loginBegin,
  loginFailure,
  loginSuccess,
  setSubmitting,
} from '../actions/authActions';
import { showSnack, resetSnack } from '../actions/alertActions';

import ENDPOINTS, {POST } from '../../services/requests';

export function performLogin({ email, password }) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(loginBegin());
    try {
      const result = await POST({
        url: ENDPOINTS.LOGIN,
        data: {
          email,
          password,
        },
      });

      if (!result?.data?.user) {
        dispatch(
          showSnack({
            message: 'Passcode sent successfully!',
            options: {
              type: 'success',
            },
          })
        );
      } else {
        dispatch(
          loginSuccess({
            token: result.data.token,
            user: result.data.user,
            role: null,
          })
        );

        dispatch(
          showSnack({
            message: 'Logged in successfully!',
            options: {
              type: 'success',
            },
          })
        );
      }

      return result;
    } catch (error) {
      dispatch(loginFailure());
      return false;
    }
  };
}



export function performResetPassword(resetPasswordToken, data) {
  return async (dispatch) => {
    dispatch(setSubmitting(true));
    try {
      const result = await POST({
        url: ENDPOINTS.RESET_PASSWORD,
        params: { resetPasswordToken },
        data,
      });
      dispatch(
        showSnack({
          message: result.data,
          options: {
            type: 'success',
          },
        })
      );
      return true;
    } catch (error) {
      return false;
    } finally {
      dispatch(setSubmitting(false));
    }
  };
}

