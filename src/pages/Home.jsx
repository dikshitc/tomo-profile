import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PublicationsSection from '../components/PublicationsSection';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import ContactForm from '../components/ContactForm';
import IntroSection from '../components/IntroSection';
import Testimonials from '../components/Testimonials';
import '../pages/Home.css';
import AboutHeroSection from '../components/AboutHeroSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="page-content">
      <IntroSection/>
      <AboutHeroSection/>
      <ServicesSection />
      <ProjectsSection />
      <PublicationsSection />
      <GallerySection />
      <Testimonials />
      <ContactForm />
      </div>
    </div>
  );
};

export default Home;