import axios from "axios";

//const BASE_URL = "http://localhost:3000/api/";

const BASE_URL = "https://portfolio-react-proyects.vercel.app/api/";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
