import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // holds favorite movie objects
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      const exists = state.items.find((m) => m.imdbID === movie.imdbID); // fixed here
      if (!exists) state.items.push(movie);
    },
    removeFavorite: (state, action) => {
      const imdbIDToRemove = action.payload;
      state.items = state.items.filter((m) => m.imdbID !== imdbIDToRemove); // fixed here
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
