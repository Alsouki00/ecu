import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
      return newMode;
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="left-section">
          <Link id="logo" to="/">
            <img src="/bilder/logo.svg" alt="logo" />
          </Link>
          <nav id="main-menu" className={`navbar ${menuOpen ? 'open' : ''}`}>
            <NavLink className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <NavLink className="nav-link" to="#" onClick={() => setMenuOpen(false)}>Features</NavLink>
          </nav>
        </div>
        <div className="right-section">
          <label className="switch">
            <p>Dark mode</p>
            <input
              type="checkbox"
              id="dark-mode-toggle"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
          <a id="sign" href="#" className="btn-primary">
            <i className="fa-thin fa-user-large"></i>
            <span>Sign in / up</span>
          </a>
        </div>
        <button className="btn-mobile" onClick={toggleMenu}>
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
