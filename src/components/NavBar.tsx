import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import CartIcon from "../assets/icons/CartIcon";
import ShoppingCart from "./ShoppingCart";
import { useState, useMemo } from "react";
import { useCart } from "../context/cartContext";
const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { cartItems, calculateCartCount } = useCart();
  const totalCartCount: number = useMemo(
    () => calculateCartCount(),
    [cartItems]
  );
  function handleOffCanvas(): void {
    setOpen((prev) => !prev);
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
            {totalCartCount > 0 && (
              <span className="cart-badge">{totalCartCount}</span>
            )}
          </button>
        </div>
      </nav>
      <div
        className={`canvas ${isOpen && "visbile-canvas"}`}
        onClick={handleOffCanvas}
      ></div>
      <ShoppingCart isOpen={isOpen} handleOffCanvas={handleOffCanvas} />
    </>
  );
};

export default Navbar;
