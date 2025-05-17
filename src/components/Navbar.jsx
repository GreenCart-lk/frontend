import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole")); // 'seller' | 'admin' | null
  const navigate = useNavigate();

  // Calculate derived state values that depend on userRole
  const isLoggedIn = !!userRole;
  const showCart = userRole !== "seller" && userRole !== "admin";

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);
    setProfileOpen(false);
    navigate("/"); // Explicitly redirect to home
  };

  const toggleProfileMenu = () => {
    setProfileOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update userRole when localStorage changes
  useEffect(() => {
    const checkUserRole = () => {
      const role = localStorage.getItem("userRole");
      setUserRole(role);
    };
    
    // Check initially
    checkUserRole();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', checkUserRole);
    
    return () => {
      window.removeEventListener('storage', checkUserRole);
    };
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

        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Home and Products links are always visible */}
          <li>
            <Link to="/" onClick={closeMenus}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenus}>Products</Link>
          </li>

          {/* Show Cart only if user is not seller or admin */}
          {showCart && (
            <li>
              <Link to="/cart" onClick={closeMenus}>
                Cart ({cartItems?.length || 0})
              </Link>
            </li>
          )}

          {/* Profile Menu */}
          <li className="profile-menu">
            <div className="profile-icon" onClick={toggleProfileMenu}>
              <FaUserCircle size={24} />
            </div>
            <ul className={`dropdown-menu ${profileOpen ? "show" : ""}`}>
              {isLoggedIn ? (
                <>
                  <li>
                    <span className="user-name">Welcome, {userRole}!</span>
                  </li>

                  {/* Show Seller Dashboard only to sellers */}
                  {userRole === "seller" && (
                    <li>
                      <Link to="/seller" onClick={closeMenus}>
                        Seller Dashboard
                      </Link>
                    </li>
                  )}

                  {/* Show Admin Panel only to admins */}
                  {userRole === "admin" && (
                    <li>
                      <Link to="/admin" onClick={closeMenus}>
                        Admin Panel
                      </Link>
                    </li>
                  )}

                  {/* Logout button for all logged-in users */}
                  <li>
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* Show Login/Signup only for non-logged in users */}
                  <li>
                    <Link to="/login" onClick={closeMenus}>Login</Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={closeMenus}>Sign Up</Link>
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