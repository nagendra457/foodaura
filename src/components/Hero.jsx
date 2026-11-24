
function Hero() {
  return (
    <section className="hero" id="home">

      {/* Left side: Hero content */}
      <div className="hero-content">

        <span className="hero-tag">
          FRESH FOOD • MADE WITH LOVE
        </span>

        <h1>
          Good Food.
          <br />
          Great <span>Moments.</span>
        </h1>

        <p>
          Discover delicious flavors made with fresh
          ingredients. Enjoy memorable meals with
          family and friends at Foodora.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="hero-primary-btn">
            Order Now →
          </a>

          <a href="#menu" className="hero-secondary-btn">
            Explore Menu
          </a>
        </div>

        <div className="hero-info">
          <div>
            <h3>4.9/5</h3>
            <span>Customer Rating</span>
          </div>

          <div>
            <h3>Fresh</h3>
            <span>Quality Ingredients</span>
          </div>
        </div>

      </div>

      {/* Right side: Hero image */}
      <div className="hero-image-container">

        <img
          src="https://images.openai.com/static-rsc-4/ijHhRSXMX2H6_tph4lVnpFNgPzuxLiN4aPz3gmfrTUg-OLZ5c6p_tFZu7hdVAmiF4dX6kxz96hmuajLR4y2xMu3wX3fSlHIvsGFDGM0nZV-suFL--Hva8eZ92K-LSkJR5IP_VHQ2DHcn4xbrCxSP2-qm-1q-AiMFVV-QCSmOQVjCxNQYqBCo_D3zbL3OQY1j?purpose=fullsize"
          alt="Fresh gourmet pasta served at a restaurant"
          className="hero-image"
        />

        <div className="rating-card">
          <span>⭐ 4.5 / 5</span>
          <p>Loved by our customers</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;
