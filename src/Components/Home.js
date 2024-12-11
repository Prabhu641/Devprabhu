import React, { useEffect } from "react";
import "aos/dist/aos.css"; 
import AOS from "aos";
import "../styless.css";

function HOME() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
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
        <div className="container conts m-5 p-5 ">
            <div className="row g-5">
                <div
                    className="col-12 col-md-6"
                    data-aos="fade-right"
                >
                    <h1 className="h1">Hi, I'm Prabhu!</h1>
                    <h2 className="h2">Front-End Developer</h2>
                    <p className="p text-secondary">
                        Passionate about crafting responsive web applications.
                        <br />
                    </p>

                    {/* Social Links */}
                    <div className="links mb-3">
                        <a
                            href="https://www.linkedin.com/in/prabhudeveloper/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x mx-2 fab1"></i>
                        </a>
                        <a
                            href="https://github.com/Prabhu641"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github fa-2x mx-2 fab1"></i>
                        </a>
                        <a href="mailto:prabhurprabhur063@gmail.com">
                            <i className="fas fa-envelope fa-2x mx-2"></i>
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex">
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleHireMeClick}
                        >
                            Hire Me
                        </button>
                        <button
                            className="btn btn-outline-secondary mx-2"
                            onClick={handleDownloadCVClick}
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <div
                    className="col-12 col-md-6"
                    data-aos="fade-left" // AOS Animation
                >
                    <img
                        src="./dev.webp"
                        className="img-fluid img1 rounded-circle"
                        alt="Prabhu"
                    />
                </div>
            </div>
        </div>
    );
}

export default HOME;
