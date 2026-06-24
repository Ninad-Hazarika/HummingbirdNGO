import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/team">Team</Link> |{" "}
      <Link to="/events">Events</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
