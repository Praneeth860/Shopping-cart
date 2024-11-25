import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import CartIcon from "../assets/icons/CartIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Store
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
      <button className="cart-button">
        <CartIcon />
        <span className="cart-badge">7</span>
      </button>
    </nav>
  );
};

export default Navbar;
