import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import '../home.css'; // Add custom styling here

function Home() {
    // Initialize AOS animation library on component mount
    useEffect(() => {
        AOS.init({
            duration: 1200, // Adding smooth delay for animations
            once: true, // Run animation only once
        });
    }, []);

    // Handler for Hire Me button click
    const handleHireMe = () => {
        alert("Thanks for considering me! I'll redirect you now.");
        setTimeout(() => {
            window.location.href = "https://www.linkedin.com/in/prabhudeveloper/";
        }, 2000); // Redirect after 2 seconds
    };

    // Handler for Download CV button click
    const handleDownloadCV = () => {
        alert("Your CV is now downloading...");
        setTimeout(() => {
            const fileUrl = "/assets/prabhu_resumes.pdf"; // Make sure the file exists at this location
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = "prabhu_resumes.pdf";
            link.click();
        }, 2000); // Wait before triggering download
    };

    return (
        <div className="home-container">
            <div className="home-content">
                {/* Text Section */}
                <div className="text-section" data-aos="fade-right">
                    <h1 className="name">Hi, I'm Prabhu!</h1>
                    <h2 className="role">Front-End Developer</h2>
                    <p className="intro-text">
                        I'm passionate about building beautiful, responsive, and interactive web applications.
                    </p>
                    
                    {/* Social Media Links */}
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
                        <a
                            href="mailto:prabhurprabhur063@gmail.com"
                            className="social-icon"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button
                            className="btn btn-hire"
                            onClick={handleHireMe}
                        >
                            Hire Me
                        </button>
                        <button
                            className="btn btn-cv"
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Image Section */}
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

export default Home;
