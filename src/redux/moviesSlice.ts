import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;
