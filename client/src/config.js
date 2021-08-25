import axios from "axios";

export const axiosInstance = axios.create({
  baseURL : "https://blog-sb01.herokuapp.com/api"
})
