import React from "react";
import "../components/IntroSection.css";
import ParticlesBackground from "./ParticlesBackground"; // Import animated background

const IntroSection = () => {
  return (
    <div className="intro-wrapper">
      <ParticlesBackground /> {/* Add animated network background */}
      <div className="intro-container">
        {/* Left Side - Image */}
        <div className="intro-image">
          <img
            src="https://media.licdn.com/dms/image/v2/C5103AQG8pFdr8gv2Vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562860386703?e=1746057600&v=beta&t=FV9Cxb3xUKNInDcAWI4adZeODOueCM0_ZSLzN9OnjBw"
            alt="Profile"
          />
        </div>

        {/* Right Side - Name & Description */}
        <div className="intro-text">
          <h1 className="intro-name">Tomo Kawane</h1>
          <p className="intro-description">
            A Global Strategist Driving Impact at the Intersection of International Affairs, Public Policy, and Sustainable Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
