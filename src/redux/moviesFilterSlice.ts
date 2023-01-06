import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  sortBy: "rating",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory } = filtersSlice.actions;
export const { setSort } = filtersSlice.actions;

export const selectCategory = (state) => state.filters.category;
export const selectSort = (state) => state.filters.sortBy;

export default filtersSlice.reducer;
