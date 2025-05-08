// import React, { useState, useEffect } from "react";

// // setting the api link
// export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_KEY}`;
// // export const API_URL = `https: //img.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;
// /* plz subsribe to thapa technical channel
//           https://www.youtube.com/thapatechnical
//          */

// const useFetch = (apiParams) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState({ show: "false", msg: "" });
//   const [movie, setMovie] = useState(null);

//   const getMovie = async (url) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       const data = await res.json();

//       console.log(data);
//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovie(data.Search || data);
//         setIsError({ show: "false", msg: "" });
//       } else {
//         setIsError({ show: "true", msg: data.Error });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // debouncing in react js
//   useEffect(() => {
//     let timeOut = setTimeout(() => {
//       getMovie(`${API_URL}&s=${apiParams}`);
//     }, 1000);
//     console.log("set");
//     return () => {
//       clearTimeout(timeOut);
//       console.log("clear");
//     };
//   }, [apiParams]);

//   return { isLoading, isError, movie };
// };

// export default useFetch;

import { useState, useEffect } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const useFetch = (apiParams, isSearch = true) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("API Response:", data);

      if (data.Response === "True") {
        setMovie(isSearch ? data.Search || data : data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error || "Unknown error" });
        setMovie(null);
      }
    } catch (error) {
      setIsError({ show: true, msg: error.message });
      setMovie(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timeOut;
    const url = isSearch
      ? `${API_URL}&s=${apiParams}`
      : `${API_URL}&i=${apiParams}`;

    if (apiParams) {
      timeOut = setTimeout(
        () => {
          getMovie(url);
        },
        isSearch ? 500 : 0
      ); // Only debounce for search
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [apiParams, isSearch]);

  return { isLoading, isError, movie };
};

export default useFetch;
