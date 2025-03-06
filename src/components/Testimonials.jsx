import React from "react";
import "../components/Testimonials.css";

const testimonialsData = [
  {
    name: "John Doe",
    feedback: "This platform has been a game-changer for my work!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "I highly recommend their services. Absolutely top-notch!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Taro Tanaka",
    feedback: "素晴らしい経験でした！また利用したいと思います。",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">What People Say</h1>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
