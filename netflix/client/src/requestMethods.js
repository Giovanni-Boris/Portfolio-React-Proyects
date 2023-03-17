import axios from "axios";

//const BASE_URL = "http://localhost:8800/api/";
const BASE_URL = "https://netflix-clone-9xzi.onrender.com/api/";
const TOKEN =
  localStorage.getItem("user") &&
  JSON.parse(localStorage.getItem("user"))?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
