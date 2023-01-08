import * as axios from "axios";
import { parseQueryParams } from "../helpers/utils";

const instance = axios.default.create({
  withCredentials: true,
  baseURL: "https://bristle-flying-poppyseed.glitch.me/",
});

export const moviesAPI = {
  getMovies(q) {
    const { page = 1, sortBy, ...params } = q;
    const query = q ? parseQueryParams(params) : "";
    return instance.get(
      `movies?${query}&page=${page}&_sort=${sortBy}&_order=desc`
    );
  },
  searchMovies(q) {
    return instance.get(`movies?q=${q}`);
  },
};
