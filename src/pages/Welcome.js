import { Link } from 'react-router-dom';
import welcomePicture from '../images/welcome-picture.jpg';
import whyChooseUs from '../images/why-choose-us.jpg';

function Welcome() {
  return (
    <main>
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="section-label mb-2">Fresh. Warm. Traditional.</p>
              <h2 className="display-5 fw-bold mb-3">Welcome to SAHA W HANA</h2>
              <p className="lead mb-4">
                We bring the flavors of the Middle East to your table with fresh ingredients,
                traditional spices, and food prepared with care.
              </p>
              <Link to="/order" className="btn btn-brand btn-lg me-2">
                Place an Order
              </Link>
              <Link to="/menu" className="btn btn-outline-brand btn-lg">
                View Menu
              </Link>
            </div>
            <div className="col-lg-6">
              <img src={welcomePicture} alt="Delicious grilled food" className="img-fluid rounded-4 shadow hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="feature-card h-100 p-4 rounded-4 shadow-sm">
              <h3 className="h5 mb-3">Fresh Ingredients</h3>
              <p className="mb-0">
                Every dish is made with fresh vegetables, quality meat, and rich Middle Eastern spices.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card h-100 p-4 rounded-4 shadow-sm">
              <h3 className="h5 mb-3">Family Recipes</h3>
              <p className="mb-0">
                Our recipes are inspired by home cooking and the food we grew up enjoying with family.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card h-100 p-4 rounded-4 shadow-sm">
              <h3 className="h5 mb-3">Easy Ordering</h3>
              <p className="mb-0">
                Choose your favorite meals, add your details, and send your order from the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <img src={whyChooseUs} alt="Food spread on table" className="img-fluid rounded-4 shadow" />
          </div>
          <div className="col-lg-6">
            <p className="section-label mb-2">Why Choose Us?</p>
            <h2 className="fw-bold mb-3">Food that feels like home</h2>
            <p>
              At SAHA W HANA, food is more than a meal. It is a warm experience shared with family
              and friends. Our chefs prepare each plate with attention, love, and authentic flavor.
            </p>
            <Link to="/about" className="btn btn-brand">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Welcome;
