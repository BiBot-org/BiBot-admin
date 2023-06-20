import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

export const CustomAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

CustomAxios.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = "Bearer " + session.tokenInfo.accessToken;
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "application/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});
