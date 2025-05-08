import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading, addToFavorites } = useGlobalContext();
  const navigate = useNavigate();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie
          ? movie.map((curMovieElem) => {
              const { imdbID, Title, Poster } = curMovieElem;
              const movieName = Title.substring(0, 15);

              return (
                <div className="card" key={imdbID}>
                  <div className="card-info">
                    <h2>
                      {movieName.length > 13 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                    <div className="button-group">
                      <button
                        onClick={() => navigate(`/movie/${imdbID}`)} // Using useNavigate hook
                        className="view-details-box"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => addToFavorites(curMovieElem)}
                        className="favorite-btn"
                      >
                        Add to Favorites
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Movie;
