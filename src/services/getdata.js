import axios from "axios";
import { baseURL, getToken } from "./axios";

function showUserApi() {
  const headers = {
    "x-access-token": getToken()
  };
  return axios.get(baseURL + "/api/users", { headers });
}

function showGroupApi() {
  const headers = {
    "x-access-token": getToken()
  };
  return axios.get(baseURL + "/api/groups", { headers });
}

export { showUserApi, showGroupApi };
