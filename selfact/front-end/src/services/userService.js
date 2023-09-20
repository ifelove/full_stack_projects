import axios from "axios";
const url = "http://localhost:5000/api/v1";

export const userRegistration = async (user) => {
  return await axios.post(`${url}/auth/register`, user).catch((error) => {
    console.log(error);
    console.log(error.response.data.msg);
  });
};

export const userLogin = async (credentials) => {
  return await axios.post(`${url}/auth/login`, credentials).catch((error) => {
    console.log(error);
    console.log(error.response.data.msg);
  });
};

export const emailVerificationLink = async ({email:email}) => {
  return await axios
    .post(`${url}/auth/verification_link`, {email:email})
    .catch((error) => {
      console.log(error);
      console.log(error.response.data.msg);
    });
};
