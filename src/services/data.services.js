import axios from "axios";
import { API } from "../globles/globle";

const getArticalsList = (data) => {
  return axios
    .get(`${API}/api/articles?page=${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const dataServices = { getArticalsList };
