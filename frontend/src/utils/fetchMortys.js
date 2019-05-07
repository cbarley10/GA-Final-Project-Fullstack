import axios from "axios";
import { API_URL } from "../constants";
const config = {
  headers: {
    "Content-type": "application/json"
  }
};

const fetchMortys = page => {
  let url = `${API_URL}?page=${page}`;
  return axios.get(url, config).then(res => {
    const { results, info } = res.data;
    return {
      results,
      info
    };
  });
};

const fetchAllMortys = (url, arr) => {
  return axios.get(url).then(res => {
    const { results, info } = res.data;
    if (info.next) {
      const newArr = arr.concat(results);
      return fetchAllMortys(info.next, newArr);
    }
    arr = [...arr.concat(results)];
    localStorage.setItem("results", JSON.stringify(arr));
    return arr;
  });
};

export { fetchMortys, fetchAllMortys };
