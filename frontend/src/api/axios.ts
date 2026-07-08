import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants/baseUrl";
import { logout } from "../utils/auth";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

let isSessionExpired = false;

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401 && !isSessionExpired) {
      isSessionExpired = true;

      logout();

      toast.error("Your session has expired. Please sign in again.");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
