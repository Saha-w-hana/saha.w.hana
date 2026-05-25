import ourMenu from '../images/our-menu.jpg';
import menuCategories from '../data/menuItems';

function Menu() {
  return (
    <div className="container">
      <div className="menu-section">
        <h2>Our Menu</h2>
        <p className="menu-note">Fresh Middle Eastern meals prepared with care and traditional flavor.</p>

        <img src={ourMenu} alt="Middle Eastern food" className="menu-image" />

        {menuCategories.map((category) => (
          <div className="menu-category" key={category.title}>
            <h3>{category.title}</h3>
            {category.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <span>{item.name}</span>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
