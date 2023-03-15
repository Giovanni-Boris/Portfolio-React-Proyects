import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";

//export const PF = "http://localhost:5000/images/";

const BASE_URL = "https://blog-app-8394.onrender.com/api/";

export const PF = "https://blog-app-8394.onrender.com/images/";

let TOKEN =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser
    ?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
