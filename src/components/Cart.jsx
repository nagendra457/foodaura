
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty!</h3>
            <p>Add delicious food from our menu.</p>
            <Link to="/#menu">Explore Menu</Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>

                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))}

            <h3>Total: ₹{cartTotal}</h3>

            <Link to="/checkout">
              Proceed to Checkout →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
