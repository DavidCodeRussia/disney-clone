import * as axios from "axios";
import { parseQueryParams } from "../helpers/utils";

// const instance = axios.default.create({
//   withCredentials: true,
//   baseURL: "https://moviesdatabase.p.rapidapi.com/",
//   headers: {
//     "X-RapidAPI-Key": "310c98161dmsh1481b05816c3d97p183237jsnca8393c226ae",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// });

const instance = axios.default.create({
  withCredentials: true,
  baseURL: "http://localhost:3001/",
});

// export const moviesAPI = {
//   getMovies(page = 5) {
//     return instance.get(`/titles/x/upcoming?page=${page}`);
//   },
// };

export const moviesAPI = {
  getMovies(q) {
    const { page = 1, sortBy, ...params } = q;
    const query = q ? parseQueryParams(params) : "";
    return instance.get(
      `movies?${query}&page=${page}&_sort=${sortBy}&_order=desc`
    );
  },
};
