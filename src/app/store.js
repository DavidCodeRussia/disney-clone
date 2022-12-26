import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/userSlice";
import homeReducer from "../redux/homeSlice";
import moviesReducer from "../redux/moviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
