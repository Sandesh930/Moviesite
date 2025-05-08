// import React, { useContext, useState } from "react";
// import useFetch from "./useFetch";

// const AppContext = React.createContext();

// /* plz subsribe to thapa technical channel
//           https://www.youtube.com/thapatechnical
//          */

// // we are getting the children and that is app component in our case
// const AppProvider = ({ children }) => {
//   const [query, setQuery] = useState("hacker");
//   const { isLoading, isError, movie } = useFetch(`&s=${query}`);

//   return (
//     <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };

import React, { useContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("movieFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("movieFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movieToAdd) => {
    if (!favorites.some((movie) => movie.imdbID === movieToAdd.imdbID)) {
      setFavorites([...favorites, movieToAdd]);
    }
  };

  const removeFromFavorites = (imdbID) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <AppContext.Provider
      value={{
        query,
        movie,
        setQuery,
        isLoading,
        isError,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

// context.js
// context.js
