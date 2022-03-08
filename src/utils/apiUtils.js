import axios from "axios";

const api = axios.create({
  baseURL: "https://fiverr.cybersoft.edu.vn",
});
api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: localStorage.getItem("AdminUser") ? `Bearer ${JSON.parse(localStorage.getItem("AdminUser")).content.accessToken}` : "",
    tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
  };
  return config;
});

export default api;