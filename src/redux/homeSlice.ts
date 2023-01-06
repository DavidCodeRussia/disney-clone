import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  newDisney: [],
  originals: [],
  trending: [],
  imgSlide: [],
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
      state.imgSlide = action.payload.imgSlide;
    },
  },
});

export const { setMovies } = homeSlice.actions;

export const selectRecommend = (state) => state.home.recommend;
export const selectNewDisney = (state) => state.home.newDisney;
export const selectOriginal = (state) => state.home.originals;
export const selectTrending = (state) => state.home.trending;
export const selectImgSlide = (state) => state.home.imgSlide;

export default homeSlice.reducer;
