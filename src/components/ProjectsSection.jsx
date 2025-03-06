import React from "react";
import "../components/ProjectSection.css";

const projects = [
  {
    title: "Narrative Kitchen/Empowering Rural Women Through ESG Solutions",
    date: "Jun 2023 - Present",
    description: "A project aimed at empowering rural women through Environmental, Social, and Governance (ESG) solutions.",
  },
  {
    title: "Japan India Transformative Technology Network (JITTN) Cohort 2",
    date: "2023",
    description: "A collaborative initiative between Japan and India to drive transformative technology advancements.",
  },
  {
    title: "Wonderful Earth Programme 2020: INDIA MEETS JAPAN",
    date: "Feb 2020",
    description: "Conducted a Japanese cultural exchange program introducing Kimono, Origami, and Indo-Japan collaboration anime RAMAYANA.",
  },
  {
    title: "Wonderful Earth Programme 2019 (Friends Of All & Nootan Bharati, Gujarat)",
    date: "Jul 2019 - Aug 2019",
    description: "An initiative focused on cultural exchange and engagement between India and Japan.",
  },
  {
    title: "Art & Judo Camp for Rural Children",
    date: "2019",
    description: "A specialized camp providing rural children with exposure to art and Judo training.",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="timeline">
        {projects.map((project, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
