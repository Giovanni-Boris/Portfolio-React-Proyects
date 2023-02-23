import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmY2MTBhMDIzMzZlYjhhYTI2ZTVmOCIsImlhdCI6MTY3NzE2ODc4NSwiZXhwIjoxNjc3NjAwNzg1fQ.D16KbAMXPzQgz-m6Rl2nqcmpKTmma8_cVAXwt9EhP6E";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
