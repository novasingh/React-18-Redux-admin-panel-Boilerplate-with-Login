import ALERT_TYPES from "../types/alertTypes";

export const showSnack = data => ({
  type: ALERT_TYPES.SHOW,
  payload: data
});

export const resetSnack = () => ({type: ALERT_TYPES.HIDE});
