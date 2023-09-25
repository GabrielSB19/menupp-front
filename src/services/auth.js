import axios from "axios";
import authHeader from "./authheader";

const URL_API = "http://127.0.0.1:5001/menupp-t/us-central1/";

const singup = (email, password) => {
  return axios.post(
    URL_API + "singup",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
    }
  );
};

const login = (email, password) => {
  return axios.post(
    URL_API + "login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
    }
  );
};

const auth = {
  singup,
  login,
};

export default auth;
