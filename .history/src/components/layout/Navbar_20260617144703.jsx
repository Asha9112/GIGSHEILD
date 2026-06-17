import logo from "../../assets/logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <img src={logo} alt="GigShield Logo" className="logo-img" />
        <span className="logo-text">GigShield</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Plans</a>
        <a href="#">Claims</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="cta-btn">Get Protected</button>
      </div>
    </nav>
  );
}

export default Navbar;