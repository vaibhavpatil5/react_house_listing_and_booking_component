import React, { useEffect, useState } from 'react';
import '../style.css';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {

    const header = document.querySelector("[data-header]");

    const handleScroll = () => {
      window.scrollY >= 400
        ? header.classList.add("active")
        : header.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <header className={`header ${isNavbarOpen ? 'active' : ''}`} data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <ion-icon name="mail"></ion-icon>
                <span>info@nestways.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <ion-icon name="pin"></ion-icon>
                <address>15/A, hsr leyout, Bengaluru </address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img
              src="https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg"
              alt="nestaway logo"
            />
          </a>

          <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img
                  src="https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg"
                  alt="nestaway logo" className="w-100"
                />
              </a>
              <button
          className="nav-close-btn"
          data-nav-close-btn
          aria-label="Close Menu"
          onClick={closeNavbar}
        >
          <ion-icon name="close"></ion-icon>
        </button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>
                    Service
                  </a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" data-nav-link>
                    Property
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <ion-icon name="search"></ion-icon>
              <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <ion-icon name="person"></ion-icon>
              <span>Profile</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
              <ion-icon name="cart"></ion-icon>
              <span>Cart</span>
            </button>
            <button
          className="header-bottom-actions-btn"
          data-nav-open-btn
          aria-label="Open Menu"
          onClick={toggleNavbar}
        >
          <ion-icon name="menu"></ion-icon>
          <span>Menu</span>
        </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
