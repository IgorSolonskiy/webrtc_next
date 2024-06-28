import { config } from "@/shared/constants/config";

const baseUrl = config.apiUrl;

export const apiUrls = {
  getProfile: baseUrl + "/auth/profile",
  login: baseUrl + "/auth/login",
  logout: baseUrl + "/auth/logout",
  refresh: baseUrl + "/auth/refresh",
  register: baseUrl + "/auth/register",
};
