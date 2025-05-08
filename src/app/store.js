import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
// import movieReducer from "./features/movie/movieSlice";
const store = configureStore({
  reducer: {
    // movie: movieReducer,
    favorites: favoritesReducer,
    // other reducers like movies, auth, etc.
  },
});

export default store;
