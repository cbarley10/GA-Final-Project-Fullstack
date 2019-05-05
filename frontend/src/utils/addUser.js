import axios from "axios";

const addUser = (firstname, lastname, email, password) => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  return axios
    .post(
      "http://localhost:4000/user",
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
