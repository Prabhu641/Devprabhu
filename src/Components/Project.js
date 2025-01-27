import React from 'react';
import '../projects.css';

export const Project = () => {
  const projects = [
    // {
    //   title: 'E-commerce Website',
    //   description: 'A fully responsive e-commerce application built with React and Django.',
    //   image: './ecommerce-project.jpg', // Replace with your actual image path
    //   liveLink: 'https://example-ecommerce-live.com',
    //   githubLink: 'https://github.com/your-username/ecommerce-project',
    // },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase projects, skills, and achievements.',
      image: './portfolio.png', // Replace with your actual image path
      liveLink: 'https://devprabhu.vercel.app/',
      githubLink: 'https://github.com/Prabhu641/Devprabhu',
    },
  ];

  return (
    <div className="projects-gallery">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-tile" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
