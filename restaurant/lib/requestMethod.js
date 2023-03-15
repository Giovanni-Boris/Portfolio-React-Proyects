import axios from "axios";

//Use this url if you want to run this url on your computer

//const BASE_URL = "http://localhost:3000/api/";

//Use this Url if you want to deploy on vercel
const BASE_URL = "https://portfolio-react-proyects.vercel.app/api/";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
