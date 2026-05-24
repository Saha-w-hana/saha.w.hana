import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="site-header text-center text-white">
        <div className="container py-4">
          <h1 className="display-6 fw-bold mb-1">SAHA W HANA</h1>
          <p className="mb-0">Authentic Middle Eastern Cuisine</p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark main-navbar sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            SAHA W HANA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Welcome
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order">
                  Order
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
