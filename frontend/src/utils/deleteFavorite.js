import axios from "axios";
import { FAVORITES_URL } from "../constants";

const config = {
  headers: {
    "Content-type": "application/json",
    "x-auth": localStorage.getItem("x-auth")
  }
};

const deleteFavorite = id => {
  return axios.delete(`${FAVORITES_URL}/${id}`, config).then(res => {
    const { favorite } = res.data;
    return favorite;
  });
};

export default deleteFavorite;
