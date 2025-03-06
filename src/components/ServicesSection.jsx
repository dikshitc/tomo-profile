import React from "react";
import "../components/ServiceSection.css";

const ServicesSection = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const servicesData = [
  {
    title: "Project Implementation",
    description:
      "Planning and management of development projects in rural and urban India, including infrastructure, education, vocational training, and community programs.",
    icon: "💡", // Changed icon
  },
  {
    title: "Project Development & Monitoring",
    description:
      "Creating new projects, proposal drafting, and overseeing project execution, including facility development.",
    icon: "📋",
  },
  {
    title: "Field Research & Feedback",
    description:
      "Conducting surveys on local social trends, analyzing data, and gathering insights through direct community engagement.",
    icon: "📊",
  },
  {
    title: "Conference Interpretation",
    description:
      "Providing professional interpretation for high-level meetings between Indian and Japanese delegates.",
    icon: "🗣️",
  },
  {
    title: "Co-ordination & Advisory",
    description:
      "Assisting in research, business collaborations, and relief projects while offering advisory services for foreign professionals.",
    icon: "🤝",
  },
  {
    title: "Educational Module Creation",
    description:
      "Developing customized training sessions and educational programs based on the skill level and needs of target groups.",
    icon: "🎓",
  },
];

export default ServicesSection;
