// import { NavLink, useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const SingleMovie = () => {
//   const { id } = useParams();
//   console.log(id);

//   const { isLoading, movie, isError } = useFetch(`&i=${id}`);

//   if (isLoading) {
//     return (
//       <section className="movie-section ">
//         <div className="loading">Loading....</div>;
//       </section>
//     );
//   }

//   return (
//     <section className="movie-section">
//       <div className="movie-card">
//         <figure>
//           <img src={movie.Poster} alt="" />
//         </figure>
//         <div className="card-content">
//           <p className="title">{movie.Title}</p>
//           <p className=""></p>
//           <p className="card-text">{movie.Released}</p>
//           <p className="card-text">{movie.Genre}</p>
//           <p className="card-text">{movie.imdbRating} / 10</p>
//           <p className="card-text">{movie.Country}</p>
//           <NavLink to="/" className="back-btn">
//             Go Back
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleMovie;

// import { NavLink, useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const SingleMovie = () => {
//   const { id } = useParams();

//   // const { isLoading, movie, isError } = useFetch(
//   //   `http://www.omdbapi.com/?i={id}`
//   // );
//   console.log("id is :");
//   console.log(id);
//   const { isLoading, movie, isError } = useFetch(
//     `http://www.omdbapi.com/?apikey=f9f7ce83&i=${id}`
//   );
//   console.log(movie);
//   if (isLoading) {
//     return (
//       <section className="movie-section">
//         <div className="loading">Loading....</div>
//       </section>
//     );
//   }
//   console.log(movie);
//   if (isError?.show) {
//     return (
//       <section className="movie-section">
//         <h2>{isError.msg}</h2>
//         <NavLink to="/" className="back-btn">
//           Go Back
//         </NavLink>
//       </section>
//     );
//   }
//   console.log("hello");
//   return (
//     // console.log("Hello");
//     <section className="movie-section">
//       <div className="movie-card">
//         <figure>
//           <img src={movie.Poster} alt={movie.Title} />
//         </figure>
//         <div className="card-content">
//           <p className="title">{movie.Title}</p>
//           <p className="card-text">{movie.Released}</p>
//           <p className="card-text">{movie.Genre}</p>
//           <p className="card-text">{movie.imdbRating} / 10</p>
//           <p className="card-text">{movie.Country}</p>
//           <NavLink to="/" className="back-btn">
//             Go Back
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleMovie;

import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError } = useFetch(id, false); // false means not a search

  if (isLoading) {
    return (
      <section className="movie-section">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  if (isError.show) {
    return (
      <section className="movie-section">
        <h2>{isError.msg}</h2>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </section>
    );
  }

  if (!movie) {
    return (
      <section className="movie-section">
        <h2>No movie data found!</h2>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">IMDB: {movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <p className="card-text">{movie.Plot}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
