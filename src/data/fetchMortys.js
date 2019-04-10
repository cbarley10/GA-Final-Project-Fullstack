import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const fetchMortys = page => {
  let url = `https://rickandmortyapi.com/api/character?page=${page}`;
  return axios.get(url, config).then(res => {
    const { results, info } = res.data;
    return {
      results,
      info
    };
  });
};
