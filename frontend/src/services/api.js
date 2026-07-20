import axios from "axios";

const api = axios.create({
  baseURL: "https://birthday-tracker-api-ebyo.onrender.com/",
});

export default api;