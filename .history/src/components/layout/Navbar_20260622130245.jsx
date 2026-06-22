import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-area">
                <img src={logo} alt="GigShield Logo" className="logo-img" />
                <span className="logo-text">GigShield</span>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/pricing">Plans</Link>
                <Link to="/claims">Claims</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="nav-buttons">
                <Link to="/login" className="login-btn">
                    Login
                </Link>
                <button className="cta-btn">Get Protected</button>
            </div>
        </nav>
    );
}

export default Navbar;