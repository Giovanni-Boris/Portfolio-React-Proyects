import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";

let TOKEN = `JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.accessToke`;

TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg5MzM2NCwiZXhwIjoxNjc3MzI1MzY0fQ.iwkdK_E-ht2IOj9cShn3GxuQh4uM6qtw8Zn9Tb9wguI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
