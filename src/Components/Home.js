import React, { useEffect } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import "../home.css"; // Make sure to modify your styles in this file

function HOME() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // slightly longer for smoother effect
            once: true,
        });
    }, []);

    const handleHireMeClick = () => {
        alert("Thanks for considering me!");
        setTimeout(() => {
            window.location = "https://www.linkedin.com/in/prabhudeveloper/";
        }, 2000);
    };

    const handleDownloadCVClick = () => {
        alert("CV is downloading");
        setTimeout(() => {
            const fileUrl = "/assets/Prabhu_CV.pdf";
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Prabhu_CV.pdf";
            link.click();
        }, 2000);
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="text-section" data-aos="fade-right">
                    <h1 className="name">Hi, I'm Prabhu!</h1>
                    <h2 className="role">Front-End Developer</h2>
                    <p className="intro-text">
                        Passionate about crafting responsive web applications.
                    </p>
                    
                    {/* Social Links */}
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/prabhudeveloper/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/Prabhu641"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:prabhurprabhur063@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button
                            className="btn btn-hire"
                            onClick={handleHireMeClick}
                        >
                            Hire Me
                        </button>
                        <button
                            className="btn btn-cv"
                            onClick={handleDownloadCVClick}
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Column with Image */}
                <div className="image-section" data-aos="fade-left">
                    <img
                        src="./dev.webp"
                        className="profile-image"
                        alt="Prabhu"
                    />
                </div>
            </div>
        </div>
    );
}

export default HOME;
