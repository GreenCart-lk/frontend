import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileOpen(false);
  };

  const toggleProfileMenu = () => {
    setProfileOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  // Close profile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenus}>
          <img
            src="/images/logo.png"
            alt="GreenCart LK Logo"
            className="nav-logo"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenus}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenus}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeMenus}>
              Cart ({cartItems?.length || 0})
            </Link>
          </li>

          {/* Profile Dropdown */}
          <li className="profile-menu">
            <div className="profile-icon" onClick={toggleProfileMenu}>
              <FaUserCircle size={24} />
            </div>
            <ul className={`dropdown-menu ${profileOpen ? "show" : ""}`}>
              {isLoggedIn ? (
                <>
                  <li>
                    <span className="user-name">Welcome, User!</span>
                  </li>
                  <li>
                    <Link to="/seller" onClick={closeMenus}>
                      Seller Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin" onClick={closeMenus}>
                      Admin Panel
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" onClick={closeMenus}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={closeMenus}>
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link to="/seller" onClick={closeMenus}>
                      Seller Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin" onClick={closeMenus}>
                      Admin Panel
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
