import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
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
      <button>hi</button>
    </nav>
  );
};

export default Navbar;
