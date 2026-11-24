
import { useState } from "react";
import { useCart } from "../Context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [payment, setPayment] = useState("Cash on Delivery");
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add food items first.");
      return;
    }

    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <section className="checkout-success">
        <div className="success-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you, {customer.name}. Your delicious food is on its way.</p>
        <h3>Total Paid: ₹{cartTotal}</h3>
        <p>Payment Method: {payment}</p>
        <p className="success-note">
          This is a frontend demo. Your order has not been sent to a restaurant.
        </p>
      </section>
    );
  }

  return (
    <section className="checkout-section" id="checkout">
      <div className="checkout-heading">
        <span>ALMOST THERE</span>
        <h1>Complete Your Order</h1>
        <p>Fresh food is just a few steps away.</p>
      </div>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <div className="checkout-fields">
            <input
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={handleChange}
              required
            />

            <input
              name="city"
              placeholder="City"
              value={customer.city}
              onChange={handleChange}
              required
            />

            <input
              name="pincode"
              placeholder="PIN Code"
              value={customer.pincode}
              onChange={handleChange}
              pattern="[0-9]{6}"
              title="Enter a 6-digit PIN code"
              required
            />

            <textarea
              name="address"
              placeholder="Full Delivery Address"
              value={customer.address}
              onChange={handleChange}
              required
            />
          </div>

          <h2 className="payment-title">Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              value="Cash on Delivery"
              checked={payment === "Cash on Delivery"}
              onChange={(event) => setPayment(event.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              value="UPI (Demo)"
              checked={payment === "UPI (Demo)"}
              onChange={(event) => setPayment(event.target.value)}
            />
            UPI (Demo – no real payment)
          </label>

          <button className="place-order-btn" type="submit">
            Place Order – ₹{cartTotal}
          </button>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))
          )}

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
