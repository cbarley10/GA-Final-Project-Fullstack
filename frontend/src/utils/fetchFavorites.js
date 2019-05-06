import axios from "axios";
const url = "http://localhost:4000/favorites";
const config = {
  headers: {
    "Content-type": "application/json",
    "x-auth": localStorage.getItem("x-auth")
  }
};

const fetchFavorites = () => {
  return axios.get(url, config).then(res => {
    const { favorite } = res.data;
    return favorite;
  });
};

export default fetchFavorites;
