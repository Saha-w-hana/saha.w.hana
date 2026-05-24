import menuImage from '../images/our-menu.jpg';
import menuCategories from '../data/menuItems';

function Menu() {
  return (
    <main className="container py-5">
      <div className="text-center mb-4">
        <p className="section-label mb-2">Our Menu</p>
        <h2 className="fw-bold">Choose Your Favorite Dish</h2>
        <p className="text-muted mx-auto page-intro">
          Browse our appetizers, main dishes, manakeesh, drinks, and desserts.
        </p>
      </div>

      <img src={menuImage} alt="Middle Eastern food" className="img-fluid rounded-4 shadow mb-5 menu-banner" />

      <div className="row g-4">
        {menuCategories.map((category) => (
          <div className="col-lg-6" key={category.name}>
            <div className="menu-card h-100 rounded-4 shadow-sm p-4">
              <h3 className="h4 fw-bold mb-3">{category.name}</h3>
              {category.items.map((item) => (
                <div className="menu-row" key={item.id}>
                  <span>{item.name}</span>
                  <strong>${item.price.toFixed(2)}</strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Menu;
