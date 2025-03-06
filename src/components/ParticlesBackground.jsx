import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      particlesInit={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false },
          },
          size: {
            value: 3,
            random: true,
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: { enable: false },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
