
function About() {
  return (
    <section className="about-section" id="about">

      {/* Left side: Restaurant image */}
      <div className="about-image-container">

        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=85"
          alt="Elegant restaurant dining experience"
          className="about-image"
        />

        <div className="experience-card">
          <h3>100%</h3>
          <p>Fresh Ingredients</p>
        </div>

      </div>

      {/* Right side: About content */}
      <div className="about-content">

        <span className="section-tag">
          OUR STORY
        </span>

        <h2>
          We Serve Happiness,
          <span> One Plate at a Time.</span>
        </h2>

        <p>
          At Foodora, we believe great food brings
          people together. Our passion is creating
          delicious meals using fresh ingredients
          and unforgettable flavors.
        </p>

        <p>
          From carefully selected ingredients to
          beautifully prepared dishes, every meal
          is made with care and passion.
        </p>

        <div className="about-features">

          <div className="about-feature">
            <span>🥬</span>
            <div>
              <h4>Fresh Ingredients</h4>
              <p>Quality ingredients in every meal.</p>
            </div>
          </div>

          <div className="about-feature">
            <span>👨‍🍳</span>
            <div>
              <h4>Expert Chefs</h4>
              <p>Delicious food prepared with passion.</p>
            </div>
          </div>

          <div className="about-feature">
            <span>❤️</span>
            <div>
              <h4>Made With Love</h4>
              <p>Every dish deserves special care.</p>
            </div>
          </div>

        </div>

        <a href="#menu" className="about-button">
          Explore Our Menu →
        </a>

      </div>

    </section>
  );
}

export default About;
