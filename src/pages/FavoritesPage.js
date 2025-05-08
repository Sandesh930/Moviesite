// src/pages/FavoritesPage.js
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {favorites.length === 0 ? (
        <p>No favorite movies added.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.imdbID} className="border p-2 rounded">
            <h3>{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
