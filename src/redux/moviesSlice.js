import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  loading: true,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export const { setLoading } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectLoading = (state) => state.movies.loading;

export default moviesSlice.reducer;
