import axios from "axios";

const signOut = () => {
  let config = {
    headers: {
      "Content-type": "application/json",
      "x-auth": localStorage.getItem("x-auth")
    }
  };
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

export { signOut };
