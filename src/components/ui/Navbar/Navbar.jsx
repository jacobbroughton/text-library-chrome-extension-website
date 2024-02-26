import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const locations = useLocation();
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className={`${location.pathname == "/" ? "current" : ""}`}>
          Home
        </Link>
        <Link to="/privacy" className={`${location.pathname == "/privacy" ? "current" : ""}`}>Privacy</Link>
        <Link to="/contact" className={`${location.pathname == "/contact" ? "current" : ""}`}>Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
