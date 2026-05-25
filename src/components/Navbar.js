import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        Welcome
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
        Menu
      </NavLink>
      <NavLink to="/order" className={({ isActive }) => (isActive ? 'active' : '')}>
        Order
      </NavLink>
    </nav>
  );
}

export default Navbar;
