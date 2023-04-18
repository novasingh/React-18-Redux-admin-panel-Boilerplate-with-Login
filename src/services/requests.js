import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./constants";
import { getToken, errorHandler } from "./utils";

const makeRequest = async (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const defaultOptions = {
        baseURL: BASE_URL,
        headers: {
          "Content-Type": "application/json",
          reason: options.data?.reason || null,
        },
        timeout: 60000,
      };

      delete options.data?.reason;

      const client = axios.create(defaultOptions);

      const token = await getToken();

      if (token) {
        client.interceptors.request.use(function (config) {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        });
      }

      return client(options)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          errorHandler(error.response ? error.response : { status: 500 });
          return reject(
            error.response && error.response.data.error
              ? error.response.data.error
              : "Something went wrong"
          );
        });
    } catch (err) {
      errorHandler({ status: 500 });
      reject(err.message);
    }
  });
};

export const GET = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "get", params, data });

export const POST = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "post", params, data });

export const PUT = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "put", params, data });

export const PATCH = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "patch", params, data });

export const DELETE = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "delete", params, data });

export default ENDPOINTS;
