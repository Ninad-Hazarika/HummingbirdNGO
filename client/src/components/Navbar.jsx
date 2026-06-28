import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">⚡</span>
          <span>Hummingbird NGO</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Our Impact
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Active Projects
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Volunteer
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact Us
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact">
            <button className="btn-donate">Donate Now</button>
          </Link>
          <div className="user-avatar-btn" title="Profile / Portal">
            👤
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
