import axios from "axios";
const url = "http://localhost:5000/api/v1";

export const userRegistration = async (user) => {
  return await axios.post(`${url}/auth/register`, user);
};

export const userLogin = async (credentials) => {
  return await axios.post(`${url}/auth/login`, credentials);
};
