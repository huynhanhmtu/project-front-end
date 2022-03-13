import axios from "axios";

const api = axios.create({
  baseURL: "https://fiverr.cybersoft.edu.vn",
});
api.interceptors.request.use((config) => {
  config.headers = {
    token: localStorage.getItem("UserInfo") ? `${JSON.parse(localStorage.getItem("UserInfo")).token}` : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzYmNkMmY4MGZmMDAwMWQ3MWE1YjkiLCJlbWFpbCI6ImFuMTNAZ21haWwuY29tIiwicm9sZSI6IkNMSUVOVCIsImlhdCI6MTY0NTk2MDQyM30.KT4AyaNvWztvEMWuf0xL5v_fYFJng7nY5pF2sG-74jE",
    tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
  };
  return config;
});

export default api;