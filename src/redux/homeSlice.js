import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const homeSlice = createSlice({
  name: "home",
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

export const { setMovies } = homeSlice.actions;

export const selectRecommend = (state) => state.home.recommend;
export const selectNewDisney = (state) => state.home.newDisney;
export const selectOriginal = (state) => state.home.originals;
export const selectTrending = (state) => state.home.trending;

export default homeSlice.reducer;
