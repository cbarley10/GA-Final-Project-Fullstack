import axios from "axios";
import { FAVORITES_URL } from "../constants";

const config = {
  headers: {
    "Content-type": "application/json",
    "x-auth": localStorage.getItem("x-auth")
  }
};

const fetchFavorites = () => {
  return axios.get(FAVORITES_URL, config).then(res => {
    const { favorite } = res.data;
    return favorite;
  });
};

export default fetchFavorites;
