// src/components/NavBar.tsx
import { lazy, Suspense, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
import CartIcon from "../assets/icons/CartIcon";
import { useCart } from "../context/cartContext";
import { X } from "lucide-react";
const ShoppingCart = lazy(() => import("./ShoppingCart"));

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { cartItems, calculateCartCount } = useCart();

  const totalCartCount = useMemo(() => calculateCartCount(), [cartItems]);

  const handleOffCanvas = () => setOpen((prev) => !prev);

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
        className={`canvas ${isOpen ? "visible-canvas" : ""}`}
        onClick={handleOffCanvas}
      />
      <Suspense
        fallback={
          <div className={`load-cart ${isOpen ? "visible-cart" : ""}`}>
            <div className="loader-container">
              <div className="loader"></div>
            </div>
            <button
              className="close-btn"
              aria-label="Close cart"
              onClick={handleOffCanvas}
            >
              <X color="hsl(0, 0%, 33%)" strokeWidth={1.75} />
            </button>
          </div>
        }
      >
        <ShoppingCart isOpen={isOpen} handleOffCanvas={handleOffCanvas} />
      </Suspense>
    </>
  );
};

export default Navbar;
