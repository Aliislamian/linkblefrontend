import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://linkeble.herokuapp.com",
  withCredentials: true,
});
export default newRequest;


export const baseURL = "https://linkeble.herokuapp.com";
