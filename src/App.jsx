
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Offers from "./components/Offers";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./components/login.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Offers />
      <Reviews />
      <Reservation />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        }
      />

      <Route
        path="/checkout"
        element={
          <>
            <Navbar />
            <Checkout />
            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
