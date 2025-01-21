import React from "react";
import "../certificate.css";

export const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Python Development",
      issuer: "Indra Institute of Education",
      date: "Jan 2025",
      description: "Completed an extensive course in full-stack Python development, covering Django, Flask, and React.",
    },
    {
      title: "Introduction to Front-End Web Development",
      issuer: "Coursera",
      date: "Dec 2024",
      description: "Gained proficiency in HTML, CSS, JavaScript, and responsive web design principles.",
    },
  ];

  return (
    <div className="container certificates-section mt-5">
      <h1 className="section-title text-center mb-4">
        My <span className="text-info">Certificates</span>
      </h1>
      <div className="row">
        {certificates.map((certificate, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card certificate-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">{certificate.title}</h5>
                <p className="card-subtitle mb-2 text-muted">{certificate.issuer}</p>
                <p className="card-text">{certificate.description}</p>
                <p className="card-footer text-secondary">{certificate.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
