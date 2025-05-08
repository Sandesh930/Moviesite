// Header.js or inside Movie.js (at the top)
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites" style={{ marginLeft: "10px" }}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Header;
