// src/components/Footer.js
import React from "react";
import "../footer.css"; // Ensure you have the updated custom CSS
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
      
        <hr/>
        <footer className="footer">
            <div className="footer-links">
             <span>© DevPrabhu 2024. All rights reserved.</span>
                <Link className="footer-link" to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link className="footer-link" to="/about">
                    <i className="fas fa-user"></i> About
                </Link>
                <Link className="footer-link" to="/skills">
                    <i className="fas fa-cogs"></i> Skills
                </Link>
                <Link className="footer-link" to="/project">
                    <i className="fas fa-briefcase"></i> Project
                </Link>
                <Link className="footer-link" to="/certificates">
                    <i className="fas fa-certificate"></i> Certificates
                </Link>
                <Link className="footer-link" to="/contact">
                    <i className="fas fa-envelope"></i> Contact
                </Link>
            </div>
        </footer>
          </>
    );
};

export default Footer;
