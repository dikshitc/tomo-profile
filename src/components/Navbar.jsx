import React, { useState, useEffect } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setVisible(false);
      } else {
        // Scrolling up, show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="container">
        <h1 className="logo">Tomo Kawane</h1>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
