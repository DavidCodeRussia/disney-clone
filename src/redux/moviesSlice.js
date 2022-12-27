import { createSlice } from "@reduxjs/toolkit";
import { moviesAPI } from "../API/api";

const initialState = {
  movies: [],
  filters: {
    category: 0,
    genre: "Drama",
  },
  sort: {
    choosedOptions: 0,
    rating: 0,
    year: 0,
    alphabet: "a",
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export const { setFilters } = moviesSlice.actions;
export const { setSort } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFilters = (state) => state.movies.filters;
export const selectSort = (state) => state.movies.sort;

export default moviesSlice.reducer;
