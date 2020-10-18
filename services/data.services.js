import axios from "axios";
import { API } from "../globles/globle";

export const dataServices = { getArticlesList };

const getArticlesList = (data) => {
  return axios
    .get(`${API}/api/articles?page=${data}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
