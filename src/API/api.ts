import * as axios from "axios";

const instance = axios.default.create({
  withCredentials: true,
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "310c98161dmsh1481b05816c3d97p183237jsnca8393c226ae",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
});

export const movies = {
  getMovies() {
    return instance.get(``);
  },
};
