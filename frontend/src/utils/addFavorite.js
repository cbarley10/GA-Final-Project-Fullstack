import axios from "axios";
import { FAVORITES_URL } from "../constants";

const postMorty = item => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "x-auth": localStorage.getItem("x-auth")
    }
  };
  const { status, species, name, image } = item;
  return axios.post(
    FAVORITES_URL,
    {
      status,
      species,
      name,
      image
    },
    config
  );
};

export default postMorty;
