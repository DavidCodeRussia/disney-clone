import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.homeMovies.recommend;
export const selectNewDisney = (state) => state.homeMovies.newDisney;
export const selectOriginal = (state) => state.homeMovies.originals;
export const selectTrending = (state) => state.homeMovies.trending;

export default movieSlice.reducer;
