import * as axios from "axios";

const instance = axios.default.create({
  withCredentials: true,
  baseURL: "https://moviesdatabase.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "310c98161dmsh1481b05816c3d97p183237jsnca8393c226ae",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});

export const moviesAPI = {
  getMovies(page = 3) {
    return instance.get(`/titles/x/upcoming?page=${page}`);
  },
  // getFilterMovies(page = 2) {
  //   return instance.get(`/titles/x/upcoming?categories`);
  // },
};
