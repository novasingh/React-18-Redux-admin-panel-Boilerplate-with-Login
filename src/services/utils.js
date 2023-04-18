import jwt_decode from "jwt-decode";
import axios from "axios";
import _ from "lodash-es";
import { store } from "../redux/store";
import { showSnack } from "../redux/actions/alertActions";
import { BASE_URL, ENDPOINTS } from "./constants";
// import { refreshTokenSuccess } from "../redux/actions/authActions";

const options = {
  type: "error",
};

const extractErrorMessage = (data) => {
  if (_.isString(data)) {
    return data;
  }

  if (!data.error) {
    return "Something went wrong";
  }

  if (!_.isString(data.error)) {
    console.log(data.error);
  }

  return data.error;
};

export const errorHandler = ({ status, data }) => {
  switch (status) {
    case 401:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      // Logout
      // store.dispatch(logout());
      break;
    case 400:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 403:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 422:
      store.dispatch(
        showSnack({ message: extractErrorMessage(data), options })
      );
      break;
    case 404:
      store.dispatch(showSnack({ message: "Resource not found", options }));
      break;
    default:
      store.dispatch(showSnack({ message: "Something went wrong", options }));
      break;
  }
};

export const getToken = async () => {
  const state = store.getState();
  const {
    auth: { token },
  } = state;

  if (!token || !token.accessToken || !token.refreshToken) {
    return null;
  }

  const decodedToken = jwt_decode(token.accessToken);
  const date = new Date(0);
  date.setUTCSeconds(decodedToken.exp);
  if (date.valueOf() < new Date().valueOf()) {
    try {
      const result = await axios.post(
        `${BASE_URL}/${ENDPOINTS.REFRESH_TOKEN}`,
        { refreshToken: token.refreshToken }
      );
      // Refresh Token API
      // store.dispatch(refreshTokenSuccess({ token: result.data.data }));
      return result.data.data.accessToken;
    } catch (err) {
      errorHandler(err.response);
    }
  }

  return token.accessToken;
};

export const uniqueValues = (arr, keyProps) => {
  const kvArray = arr.map((entry) => {
    const key = keyProps.map((k) => entry.headers[k]).join("|");
    return [key, entry];
  });
  const map = new Map(kvArray);
  return Array.from(map.values());
};
