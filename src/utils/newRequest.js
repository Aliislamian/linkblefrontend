import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://linkablebackend-production-e3d2.up.railway.app",
  withCredentials: true,
});
export default newRequest;


export const baseURL = "https://linkablebackend-production-e3d2.up.railway.app";
