
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const sectionLink = (id) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Food<span>Aura.</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/#home" onClick={(e) => {
          e.preventDefault();
          sectionLink("home");
        }}>Home</a>

        <a href="/#about" onClick={(e) => {
          e.preventDefault();
          sectionLink("about");
        }}>About</a>

        <a href="/#menu" onClick={(e) => {
          e.preventDefault();
          sectionLink("menu");
        }}>Menu</a>

        <a href="/#reservation" onClick={(e) => {
          e.preventDefault();
          sectionLink("reservation");
        }}>Reservation</a>

        <a href="/#contact" onClick={(e) => {
          e.preventDefault();
          sectionLink("contact");
        }}>Contact</a>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="cart-button" onClick={closeMenu}>
          🛒 Cart ({cartCount})
        </Link>

        <Link to="/login" className="login-button" onClick={closeMenu}>
          Login
        </Link>

        <Link to="/checkout" className="order-button" onClick={closeMenu}>
          Order Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
