import axios from "axios";
import { USER_TOKEN_URL, USER_LOGIN_URL } from "../constants";

const config = {
  headers: {
    "Content-type": "application/json",
    "x-auth": localStorage.getItem("x-auth")
  }
};

const signOut = () => {
  return axios.delete(USER_TOKEN_URL, config).then(res => {
    if (res.status === 200) {
      localStorage.removeItem("x-auth");
      localStorage.removeItem("firstname");
      window.location.reload();
    }
  });
};

const signIn = (email, password) => {
  return axios
    .post(
      USER_LOGIN_URL,
      {
        email,
        password
      },
      config
    )
    .then(res => res);
};

export { signOut, signIn };
