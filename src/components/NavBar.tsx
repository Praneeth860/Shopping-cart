import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import CartIcon from "../assets/icons/CartIcon";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  function handleOffCanvas(): void {
    setOpen(!isOpen);
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav_container">
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
          <button className="cart-button" onClick={handleOffCanvas}>
            <CartIcon />
            <span className="cart-badge">7</span>
          </button>
        </div>
      </nav>
      <ShoppingCart isOpen={isOpen} />
    </>
  );
};

export default Navbar;
