import ourStory from '../images/our-story.jpg';
import visitUs from '../images/visit-us.jpg';

function About() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <p className="section-label mb-2">About Us</p>
        <h2 className="fw-bold">Our Story</h2>
        <p className="text-muted mx-auto page-intro">
          SAHA W HANA was created to share delicious Middle Eastern food in a friendly and comfortable place.
        </p>
      </div>

      <section className="row align-items-center g-4 mb-5">
        <div className="col-lg-6">
          <img src={ourStory} alt="Restaurant interior" className="img-fluid rounded-4 shadow" />
        </div>
        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">From a small kitchen to a loved restaurant</h3>
          <p>
            SAHA W HANA was founded in 2026 with a simple mission: to share the rich and delicious
            flavors of Middle Eastern cuisine with our community. What started as a small family
            kitchen has grown into a restaurant loved by many.
          </p>
          <p>
            Our name comes from two Arabic words. Saha means health, and Hana means happiness.
            We believe a good meal brings both to your life.
          </p>
        </div>
      </section>

      <section className="row g-4 mb-5">
        <div className="col-lg-6">
          <div className="info-card h-100 p-4 rounded-4 shadow-sm">
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p>
              We are committed to serving high-quality food made from fresh, locally sourced ingredients.
              Every dish on our menu is carefully prepared using traditional recipes that have been in
              our family for generations.
            </p>
            <p className="mb-0">
              We believe good food brings people together, and our restaurant is a place where families
              and friends can gather, share a meal, and create memories.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-card h-100 p-4 rounded-4 shadow-sm">
            <h3 className="fw-bold mb-3">Restaurant Details</h3>
            <p><strong>Owners:</strong> Omar Abo Adila &amp; Abdulkarim Amin</p>
            <p><strong>Contact:</strong> +961 81 479 714 | +961 3 085 578</p>
            <p><strong>Address:</strong> 36 Main Street, Haouch Al-Harimah</p>
            <p className="mb-0"><strong>Opening Hours:</strong> Every day from 11:00 AM to 11:00 PM</p>
          </div>
        </div>
      </section>

      <section className="visit-card rounded-4 overflow-hidden shadow">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6">
            <img src={visitUs} alt="Restaurant dining area" className="img-fluid visit-image" />
          </div>
          <div className="col-lg-6 p-4 p-lg-5">
            <h3 className="fw-bold mb-3">Visit Us</h3>
            <p>
              Walk-ins are welcome, and reservations can be made by phone. Come with your family,
              bring your friends, and enjoy a warm Middle Eastern dining experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
