import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/authContext.tsx";
import "../styles/_header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, isLoading, logout } = useAuth();

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

            {isLoading ? (
              <span className="account-link"><span className="account-icon">...</span></span>
            ) : isAuthenticated ? (
              <div className="auth-container">
                <Link to="/account" className="account-link" onClick={closeMenu}>
                  <span className="account-icon">My account</span>
                </Link>
                <button className="logout-button" onClick={() => { logout(); }}>
                  Logout
                </button>
              </div>
            
            ) : (
              <a href="http://localhost:3000/api/auth/google" className="account-link" onClick={closeMenu}>
                <span className="account-icon">Sign In</span>
              </a>
            )}

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
              {isLoading ? (
                <span>Loading...</span>
              ) : isAuthenticated ? (
                <div className="mobile-auth-container">
                  <Link to="/account" onClick={closeMenu}>My Account</Link>

                  <button type="button" className="mobile-logout-button" onClick={() => { logout(); closeMenu(); }}>Logout</button>
                </div>
              ) : (
                <a href="http://localhost:3000/api/auth/google" onClick={closeMenu}>Sign In</a>
              )}
            </li> 
          </ul>
        </nav>
      </header>
  
    </>
    )
};