import { Link } from "react-router-dom";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/" className="logo_link">
          Logo
        </Link>
      </h1>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>

        <li>
          <Link to="/service" className="Services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/about" className="about">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" className="Contact">
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Header;
