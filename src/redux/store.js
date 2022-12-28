import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import homeReducer from "./homeSlice";
import moviesReducer from "./moviesSlice";
import moviesFilterReducer from "./moviesFilter";

export default configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    movies: moviesReducer,
    filters: moviesFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
