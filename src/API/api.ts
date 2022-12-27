import * as axios from "axios";

const instance = axios.default.create({
  withCredentials: true,
  baseURL: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
  headers: {
    "X-RapidAPI-Key": "310c98161dmsh1481b05816c3d97p183237jsnca8393c226ae",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});

export const moviesAPI = {
  getMovies() {
    return instance.get(``);
  },
};
