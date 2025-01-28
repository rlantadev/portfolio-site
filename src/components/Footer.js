import React from 'react';
import { FaGithub, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import profilePic from '../assets/profile.jpg'; // Fotoğrafınızı import edin

const Footer = () => {
  return (
    <footer className="footer">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <p>H. Dağhan SAYDAM</p>
      <div className="social-icons">
        <a href="https://github.com/rlantadev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/rl4nta" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/rlantadev" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="mailto:rlantadev@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;