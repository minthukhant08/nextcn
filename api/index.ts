import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 3000
});

export default instance;