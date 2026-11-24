
import { useState } from "react";

function Reservation() {
  const [booking, setBooking] = useState(null);

  const handleReservation = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const reservationDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
    };

    setBooking(reservationDetails);
    e.target.reset();
  };

  return (
    <section className="reservation-section" id="reservation">
      <div className="reservation-content">

        <span className="section-tag">BOOK A TABLE</span>

        <h2>Reserve Your Table</h2>

        <p>
          Enjoy delicious food and unforgettable moments
          with your friends and family.
        </p>

        {booking ? (

          <div className="booking-success">

            <div className="success-icon">✓</div>

            <h2>Reservation Successful!</h2>

            <p className="success-message">
              Thank you, {booking.name}!
              Your reservation request has been received.
            </p>

            <div className="booking-details">

              <h3>Booking Details</h3>

              <div className="booking-detail-row">
                <span>Customer Name</span>
                <strong>{booking.name}</strong>
              </div>

              <div className="booking-detail-row">
                <span>Email Address</span>
                <strong>{booking.email}</strong>
              </div>

              <div className="booking-detail-row">
                <span>Phone Number</span>
                <strong>{booking.phone}</strong>
              </div>

              <div className="booking-detail-row">
                <span>Date</span>
                <strong>{booking.date}</strong>
              </div>

              <div className="booking-detail-row">
                <span>Time</span>
                <strong>{booking.time}</strong>
              </div>

              <div className="booking-detail-row">
                <span>Guests</span>
                <strong>{booking.guests}</strong>
              </div>

            </div>

            <button
              className="reservation-button"
              onClick={() => setBooking(null)}
            >
              Make Another Reservation →
            </button>

          </div>

        ) : (

          <form
            className="reservation-form"
            onSubmit={handleReservation}
          >

            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter 10-digit phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                title="Enter a valid 10-digit phone number"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>

                <input
                  type="time"
                  name="time"
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Number of Guests</label>

              <select name="guests" defaultValue="" required>

                <option value="" disabled>
                  Select guests
                </option>

                <option value="1 Person">1 Person</option>
                <option value="2 People">2 People</option>
                <option value="3 People">3 People</option>
                <option value="4 People">4 People</option>
                <option value="5 People">5 People</option>
                <option value="6 People">6 People</option>

              </select>
            </div>

            <button
              type="submit"
              className="reservation-button"
            >
              Book a Table →
            </button>

          </form>

        )}

      </div>
    </section>
  );
}

export default Reservation;
