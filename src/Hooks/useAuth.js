import axios from "axios";
import { logIn, logOut, updateAccessToken } from "../Redux/userSlice";
import { useAppSelector } from "./useReduxHooks.js";
import { useAppDispatch } from "./useReduxHooks.js";
import useRefreshToken from "./useRefreshToken.js";
import { getRefreshToken } from "../API/Auth";
import { getCookie, removeCookie } from "../Utils/cookie.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const { lang } = useParams();
  const [ready, setReady] = useState(false);
  const dispatch = useAppDispatch();
  const { Auth } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(logIn(user));
    } else {
      dispatch(logOut());
    }
    setReady(true);
  }, [dispatch]);

  return ready;
};
