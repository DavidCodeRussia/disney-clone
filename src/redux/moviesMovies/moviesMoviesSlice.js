import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesMoviesSlice = createSlice({
  name: "moviesMovies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
  },
});

export const { setMovies } = moviesMoviesSlice.actions;

export const selectMovies = (state) => state.movieMovies.movies;

export default moviesMoviesSlice.reducer;
