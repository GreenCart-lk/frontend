import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <div className="container">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
    </div>
  );
}

export default App;
