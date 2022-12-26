import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  filters: {
    category: 0,
    sortBy: "Drama",
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
  },
});

export const { setMovies } = moviesSlice.actions;
export const { setFilters } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFilters = (state) => state.movies.filters;

export default moviesSlice.reducer;
