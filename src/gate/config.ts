import axios from "axios";

/*************************************
 *------* Setup Axios Configs *------*
 *************************************/
const client = axios;
client.defaults.timeout = 15000;
client.defaults.baseURL = process.env.REACT_APP_BASE_URL;

/*************************************
 *------* Request Interceptor *------*
 *************************************/
client.interceptors.request.use(
  async (config) => {
    // *------* Set Headers *------*
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**************************************
 *------* Response Interceptor *------*
 **************************************/

export default client;
