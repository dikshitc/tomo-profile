import React from "react";
import "../components/ContactForm.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">Feel free to reach out for collaborations, inquiries, or just to connect!</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:kawanetomo337@gmail.com">kawanetomo337@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+123456789">+123456789</a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/tomo-kawane-ahmedabad-mumbai/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
