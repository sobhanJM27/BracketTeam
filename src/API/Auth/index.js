import axiosInstance from '../axiosInstance';
import { Endpoints } from '../endpoints';

export const register = async (data) => {
  const response = await axiosInstance.post(Endpoints.register, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getRefreshToken = async (token) => {
  const response = await axiosInstance.post(
    Endpoints.refreshToken,
    { token },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.status === 201) {
    return response.data.refreshToken;
  } else {
    throw new Error(response.statusText);
  }
};

export const login = async (phone, password) => {
  const response = await axiosInstance.post(
    Endpoints.login,
    { phone, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
