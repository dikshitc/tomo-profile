import React from "react";
import "../components/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
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

export default HeroSection;
