// import React from "react";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="nav-bar">
//       <NavLink to="/">Movies</NavLink>
//       <NavLink to="/favorites">Favorites</NavLink>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Movies
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navbar;
