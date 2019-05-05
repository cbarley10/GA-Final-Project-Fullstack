import axios from "axios";

const postMorty = item => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "x-auth": localStorage.getItem("x-auth")
    }
  };
  const { status, species, type, name, image } = item;
  return axios.post(
    "http://localhost:4000/favorites",
    {
      status,
      species,
      type,
      name,
      image
    },
    config
  );
};

export default postMorty;
