import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ Uses your .env
  withCredentials: true, // if your API needs cookies/session
});

export default api;
