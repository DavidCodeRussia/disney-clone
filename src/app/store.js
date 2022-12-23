import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/user/userSlice";
import homeMoviesReducer from "../redux/homeMovies/moviesSlice";
import moviesMoviesReducer from "../redux/moviesMovies/moviesMoviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    homeMovies: homeMoviesReducer,
    movieMovies: moviesMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
