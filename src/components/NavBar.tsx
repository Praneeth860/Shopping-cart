import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
import CartIcon from "../assets/icons/CartIcon";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/store">Store</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
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
