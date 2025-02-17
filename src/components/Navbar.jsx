import { Link } from "react-router-dom";
import "../styles/global.css";
import { useState } from "react";

const Navbar = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <div>
        <Link to="/">GreenCart LK</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        {isLoggedIn ? (
          <>
            <span className="user-name">Welcome, User!</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        <Link to="/seller">Seller Dashboard</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>
    </nav>
  );
};

export default Navbar;
