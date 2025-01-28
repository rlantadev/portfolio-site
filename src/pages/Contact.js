import React from 'react';
import './Contact.css';
import { FaEnvelope } from 'react-icons/fa'; // Mail logosunu import edin

const Contact = () => {
  return (
    <main className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <FaEnvelope className="mail-icon" />
        <p>rlantadev@gmail.com</p>
      </div>
    </main>
  );
};

export default Contact;