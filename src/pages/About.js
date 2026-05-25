import ourStory from '../images/our-story.jpg';
import visitUs from '../images/visit-us.jpg';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <h2>Our Story</h2>
        <img src={ourStory} alt="Restaurant interior" className="about-image" />
        <p>
          SAHA W HANA was founded in 2026 with a simple mission: to share the rich and
          delicious flavors of Middle Eastern cuisine with our community. What started as a
          small family kitchen has grown into a restaurant loved by many.
        </p>
        <p>
          Our name comes from two Arabic words — Saha meaning health, and Hana meaning
          happiness. We believe that a good meal brings both to your life.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We are committed to serving high-quality food made from fresh, locally sourced
          ingredients. Every dish on our menu is carefully prepared using traditional recipes
          that have been in our family for generations.
        </p>
        <p>
          We believe that good food brings people together, and our restaurant is a place
          where families and friends can gather, share a meal, and create memories.
        </p>
      </div>

      <div className="about-section">
        <h2>Visit Us</h2>
        <img src={visitUs} alt="Restaurant dining area" className="about-image" />
        <p>
          We are located in the heart of the city and are open every day from 11:00 AM to
          11:00 PM. Walk-ins are welcome, and reservations can be made by phone.
        </p>

        <div className="visit-card">
          <p><strong>Owners:</strong> Omar Abo Adila &amp; Abdulkarim Amin</p>
          <p><strong>Contact:</strong> +961 81 479 714 | +961 3 085 578</p>
          <p><strong>Address:</strong> 36 Main Street, Haouch Al-Harimah</p>
        </div>
      </div>
    </div>
  );
}

export default About;
