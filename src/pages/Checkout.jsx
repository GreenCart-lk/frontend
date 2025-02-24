import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle order confirmation
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderConfirmed(true);
    setCartItems([]); // Clear the cart after order is placed
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {orderConfirmed ? (
        <div className="order-confirmation">
          <h3>Thank you for your order!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleConfirmOrder} className="checkout-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Payment Method:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit-card">Credit Card</option>
              <option value="cash-on-delivery">Cash on Delivery</option>
            </select>
          </div>
          <h3>Total: {totalPrice} LKR</h3>
          <button type="submit" className="confirm-order-btn">
            Confirm Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
