import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilePic from '../assets/profile.jpg'; // Profil fotoğrafınızı import edin

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">MyPortfolio</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic-header" />
        </div>
      </div>
    </header>
  );
};

export default Header;