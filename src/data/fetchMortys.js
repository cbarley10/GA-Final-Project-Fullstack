import axios from "axios";
const config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const fetchMortys = url => {
  return axios.get(url, config).then(res => {
    const { results } = res.data;
    return results;
  });
};
