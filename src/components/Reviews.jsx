
const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Regular Customer",
    rating: 5,
    message:
      "Amazing food and excellent service. The pizza was fresh and delicious!",
    initial: "R",
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Food Lover",
    rating: 5,
    message:
      "Beautiful atmosphere and wonderful food. I really enjoyed my experience.",
    initial: "P",
  },
  {
    id: 3,
    name: "Siddi Nagendra",
    role: "Regular Customer",
    rating: 4,
    message:
      "Great taste, friendly staff and quick service. Definitely visiting again!",
    initial: "A",
  },
];

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-heading">
        <span className="section-tag">TESTIMONIALS</span>
        <h2>What Our Customers Say</h2>
        <p>Real experiences make us better every day.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-stars">
              {"★".repeat(review.rating)}
            </div>

            <p className="review-message">
              "{review.message}"
            </p>

            <div className="review-customer">
              <div className="customer-avatar">
                {review.initial}
              </div>

              <div>
                <h3>{review.name}</h3>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
