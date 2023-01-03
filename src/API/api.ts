import * as axios from "axios";

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
  getMovies(category) {
    return instance.get(`movies?category=${category}`);
  },
};
