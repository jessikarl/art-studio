import { Link } from "react-router";
import "../styles/_header.scss";

export const Header = () => {
    return (
    <>
      <header>
        <div className="header-container">

          <div className="header-logo">
            <Link to="/" className="logo-link">
              Camilla Karin <span>Studio</span>
            </Link>
          </div>
          
          <nav className="header-nav">
            <ul className="nav-links">
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">The Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

          </nav>

          <div className="header-utils">
            <Link to="/cart" className="cart-link">
              <span className="cart-icon">Cart</span>
            </Link>
            <Link to="/account" className="account-link">
              <span className="account-icon">Sign In</span>
            </Link>

            {/* placeholder for mobile navigation */}
            <button className="mobile-menu-button">
              <span className="mobile-menu-icon">X</span>
            </button>

          </div>


        </div>
      </header>
  
    </>
    )
};