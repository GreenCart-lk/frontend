import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} />
    </div>
  );
}

export default App;
