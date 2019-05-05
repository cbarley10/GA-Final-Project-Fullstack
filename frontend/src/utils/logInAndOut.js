import axios from "axios";

const config = {
  headers: {
    "Content-type": "application/json",
    "x-auth": localStorage.getItem("x-auth")
  }
};

const signOut = () => {
  return axios
    .delete("http://localhost:4000/users/me/token", config)
    .then(res => {
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
      "http://localhost:4000/user/login",
      {
        email,
        password
      },
      config
    )
    .then(res => res);
};

export { signOut, signIn };
