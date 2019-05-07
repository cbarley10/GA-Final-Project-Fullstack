import axios from "axios";
import { USERS_URL } from "../constants";

const config = {
  headers: {
    "Content-type": "application/json"
  }
};

const addUser = (firstname, lastname, email, password) => {
  return axios
    .post(
      USERS_URL,
      {
        firstname,
        lastname,
        email,
        password
      },
      config
    )
    .then(res => res);
};

export default addUser;
