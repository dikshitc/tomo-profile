import React from "react";
import "../components/AboutHeroSection.css";

const AboutHeroSection = () => {
  return (
    <div className="about-hero-container">
      {/* Left Side - About Section */}
      <div className="about-content">
        <h1 className="about-title">Tomo Kawane</h1>
        <p>
          Tomo is a senior researcher at the India-Japan Laboratory at Keio University and a visiting researcher at the Asia Eurasia Research Institute in Tokyo. She has over 30 years of experience in advising government and corporate entities in India and Japan on bilateral projects. 
        </p>
        <p>
          She has worked on ODA funding NGO projects for the Consulate General of Japan, coordinated Japan's first official emergency relief post-Gujarat Earthquake of 2001, and served as the only Japanese expert for the People's Linguistic Survey of India.
        </p>
        <p>
          She can converse in 7 different languages: <strong>Japanese, English, French, German, Hindi, Gujarati,</strong> and <strong>Urdu</strong>.
        </p>
      </div>

      {/* Right Side - Hero Section Video */}
      <div className="hero-video-wrapper">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/O8UCuGzjQQs?start=300&autoplay=1&mute=1&loop=1&playlist=O8UCuGzjQQs"
          title="Introductory Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutHeroSection;
