/** @format */

import axios, { AxiosRequestConfig } from "axios";

const Request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

const requestConfiguration = (config: AxiosRequestConfig) => {
  /**
   * if user chooses to be remembered pull from local storage else
   * pull from session storage for consequent request
   */
  const token = localStorage.getItem("storeToken");

  // don't append token for this routes
  if (token) {
    return {
      ...config,
      headers: {
        token: `Bearer ${token}`,
        credentials: "include",
        ...config.headers,
      },
    };
  }
  return config;
};

Request.interceptors.request.use(requestConfiguration as any, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export { Request };
