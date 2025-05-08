import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";
const imgUrl = "https://via.placeholder.com/200/200";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <section className="favorites-page">
      <h1 className="favorites-title">Your Favorite Movies</h1>

      {favorites.length === 0 ? (
        <div className="no-favorites">
          <p>You haven't added any favorites yet.</p>
          <NavLink to="/" className="back-btn">
            Browse Movies
          </NavLink>
        </div>
      ) : (
        <div className="grid grid-4-col">
          {favorites.map((curMovieElem) => {
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
                      onClick={() => removeFromFavorites(imdbID)}
                      className="favorite-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Favorites;
