import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.css';
import { useAuth } from './AuthContext';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const path = location.pathname;

  // Redirect to Home if the user is authenticated and on the Welcome page
  if (isAuthenticated && path === '/') {
    navigate('/home', { replace: true });
  }

  return (
    <header className="nav-header">
      <div className="logo-section">
        <img src={logo} alt="Site Logo" className="logo" />
      </div>
      <button className="menu-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li className={path === '/home' ? 'selected' : ''}>
            <Link to="/home">Home</Link>
          </li>
          <li className={path === '/collections' ? 'selected' : ''}>
            <Link to="/collections">Collections</Link>
          </li>
          <li className={path === '/authors' ? 'selected' : ''}>
            <Link to="/authors">Authors</Link>
          </li>
          {path === '/' ? (
            !isAuthenticated ? (
              <>
                <li>
                  <Link to="/login">
                    <button className="login-button">Login</button>
                  </Link>
                </li>
                <li>
                  <button className="signup-button" onClick={() => navigate('/login?mode=register')}>Register</button>
                </li>
              </>
            ) : null
          ) : (
            isAuthenticated && (
              <div className="dropdown">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/favorites">My Favorites</Link></li>
                  <li><Link to="/downloads">My Downloads</Link></li>
                  <li><button onClick={logout}>Log Out</button></li>
                </div>
              </div>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};
