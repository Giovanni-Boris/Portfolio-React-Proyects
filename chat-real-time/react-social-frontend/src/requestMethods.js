import axios from "axios";

//const BASE_URL = "http://localhost:8800/api/";

const BASE_URL = "https://facebook-c6c2.onrender.com/api/";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
