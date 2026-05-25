import { Link } from 'react-router-dom';
import welcomePicture from '../images/welcome-picture.jpg';
import whyChooseUs from '../images/why-choose-us.jpg';

function Welcome() {
  return (
    <div className="container">
      <img src={welcomePicture} alt="Delicious grilled food" className="hero-image" />

      <div className="welcome-section">
        <h2>Welcome to SAHA W HANA</h2>
        <p>
          We bring the flavors of the Middle East to your table. Our dishes are made with fresh
          ingredients, traditional spices, and cooked over open fire to give you the most authentic
          taste. Whether you are craving a warm plate of hummus, a juicy shawarma, or a freshly
          baked manakeesh, we have something for everyone.
        </p>

        <div className="quick-info">
          <div>
            <strong>Fresh Food</strong>
            <span>Prepared daily</span>
          </div>
          <div>
            <strong>Open Daily</strong>
            <span>11:00 AM - 11:00 PM</span>
          </div>
          <div>
            <strong>Easy Ordering</strong>
            <span>Pickup or delivery</span>
          </div>
        </div>

        <div className="welcome-buttons">
          <Link to="/menu" className="btn simple-btn">View Menu</Link>
          <Link to="/order" className="btn simple-btn second-btn">Place Order</Link>
        </div>
      </div>

      <div className="welcome-section">
        <h2>Why Choose Us?</h2>
        <p>
          At SAHA W HANA, we believe food is more than just a meal — it is an experience.
          Our chefs use recipes passed down through generations, and every dish is prepared with
          love and care. Come visit us and taste the difference.
        </p>
      </div>

      <img src={whyChooseUs} alt="Food spread on table" className="hero-image" />
    </div>
  );
}

export default Welcome;
