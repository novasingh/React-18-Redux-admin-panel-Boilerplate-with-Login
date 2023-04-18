// import Collapse from "@mui/material/Collapse";
import ALERT_TYPES from "../types/alertTypes";

const defaultOptions = Object.seal({
  position: "bottom-center",
  type: "default", // default | success | info | warning | error
  persist: false,
  autoClose: 3000,
  closeOnClick: true,
  // TransitionComponent: Collapse
});

const initialState = {
  show: false,
  message: null,
  options: {
    ...defaultOptions,
    key: new Date().valueOf()
  }
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_TYPES.SHOW:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        options: {
          ...defaultOptions,
          ...action.payload.options,
          key: action.payload.options.key ? action.payload.options.key : new Date().valueOf()
        }
      };

    case ALERT_TYPES.HIDE:
      return initialState;

    default:
      return state;
  }
}
