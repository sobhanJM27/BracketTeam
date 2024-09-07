import axios from 'axios';
import { getBaseURL } from '../i18n/language';

const getCurrentLang = () => {
  return localStorage.getItem('lang') || 'fa';
};

const BASE_URL = getBaseURL();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;

export const createPrivateAxios = ({ refresh, token, updateAccessToken, dispatch }) => {
  const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          const newAccessToken = await refresh();
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          dispatch(updateAccessToken({ token: newAccessToken }));
          return axiosPrivate.request(error.config);
        } catch (refreshError) {
          console.log(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};