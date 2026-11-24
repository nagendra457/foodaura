
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="offers-section" id="offers">
      <div className="offers-heading">
        <span className="section-tag">SPECIAL OFFERS</span>
        <h2>Delicious Deals Just for You</h2>
        <p>Enjoy your favourite meals with exciting offers.</p>
      </div>

      <div className="offers-grid">

        <div className="offer-card offer-one">
          <div className="offer-content">
            <span>LIMITED TIME OFFER</span>
            <h3>Get 30% OFF</h3>
            <p>On your first food order.</p>

            <button onClick={goToMenu}>
              Order Now →
            </button>
          </div>
        </div>

        <div className="offer-card offer-two">
          <div className="offer-content">
            <span>WEEKEND SPECIAL</span>
            <h3>Buy 1 Get 1</h3>
            <p>Enjoy more pizza with your friends.</p>

            <button onClick={goToMenu}>
              Explore Menu →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Offers;
