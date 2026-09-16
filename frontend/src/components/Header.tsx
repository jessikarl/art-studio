import { useState } from "react";
import { Link } from "react-router";
import "../styles/_header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-container">

          <div className="header-logo">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              Camilla Karin <span>Studio</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header-nav">
            <ul className="nav-links">
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">The Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

          </nav>

          <div className="header-utils">
            <Link to="/cart" className="cart-link" onClick={closeMenu}>
              <span className="cart-icon">Cart</span>
            </Link>
            <Link to="/account" className="account-link" onClick={closeMenu}>
              <span className="account-icon">Sign In</span>
            </Link>

            {/* mobile nav button */}
            <button type="button" className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? "✕" : "☰"}
            </button>

          </div>


        </div>

        {/* Mobile nav */}
        <nav className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>The Process</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/account" onClick={closeMenu}>Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
  
    </>
    )
};