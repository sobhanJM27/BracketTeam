import axios from "axios";
import { logIn, logOut, updateAccessToken } from "../Redux/userSlice";
import { useAppSelector } from "./useReduxHooks.js";
import { useAppDispatch } from "./useReduxHooks.js";
import useRefreshToken from "./useRefreshToken.js";
import { getRefreshToken } from "../API/Auth";
import { getCookie, removeCookie } from "../Utils/cookie.js";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const user = useAppSelector((state) => state.user);
  return user;
};

export const useAuthHooks = () => {
  const dispatch = useAppDispatch();
  const refresh = useRefreshToken();
  const login = (userData) => {
    dispatch(logIn(userData));
  };
  const logout = () => {
    dispatch(logOut());
  };
  return { updateAccessToken, dispatch, refresh, login, logout };
};

export const useInitialAuth = () => {
  const [ready, setReady] = useState(false);
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();

  useEffect(() => {
    const getAccess = async () => {
      const token = getCookie("win_token");
      if (token) {
        if (!Auth) {
          try {
            const res = await getRefreshToken(token);
            dispatch(
              logIn({
                role: res.user.Role[0],
                token: res.token,
                data: res.user,
              })
            );
          } catch (error) {
            const errors = error;
            console.log(error);
            if (!axios.isAxiosError(errors)) {
            } else {
              if (errors?.response?.status === 401) {
                removeCookie("win_token");
                dispatch(logOut());
                window.location.replace("login");
              }
            }
          } finally {
            setReady(true);
          }
        }
      } else {
        if (Auth) {
          dispatch(logOut());
        }
      }
      setReady(true);
    };
    getAccess();
  }, []);

  return ready;
};

