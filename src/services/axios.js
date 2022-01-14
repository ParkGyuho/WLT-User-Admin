import axios from "axios";

const baseURL = `${process.env.VUE_APP_ROOT_API}`;
const axiosInstance = axios.create({ baseURL: baseURL });

const getToken = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return user ? user.token : null;
};

axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();

  if (token) config.headers.common["x-access-token"] = token;
  return config;
});

export default axiosInstance;
