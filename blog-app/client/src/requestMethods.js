import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";

//export const PF = "http://localhost:5000/images/";

const BASE_URL = "https://blog-app-8394.onrender.com:10000/api/";

export const PF = "https://blog-app-8394.onrender.com:10000/images/";

let TOKEN =
  localStorage.getItem("user") &&
  JSON.parse(localStorage.getItem("user"))?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
