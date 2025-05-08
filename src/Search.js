import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  /* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */
  return (
    <>
      <section className="search-section">
        <h1 class="search">Search Your Favourite Movie</h1>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="input-width">
            <input
              type="text"
              className="search-input"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
