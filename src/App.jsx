import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app-container">
      <Navbar cartItems={cartItems} />
      <div className="container">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
