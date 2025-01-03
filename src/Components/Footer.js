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
                 <div className="footer-header">
                       <h5>© DevPrabhu 2024. All rights reserved.</h5>
                </div>

                <Link className="footer-link" to="/">
                    <i className="fas fa-home"></i> 
                </Link>
                <Link className="footer-link" to="/about">
                    <i className="fas fa-user"></i> 
                </Link>
                <Link className="footer-link" to="/skills">
                    <i className="fas fa-cogs"></i> 
                </Link>
                <Link className="footer-link" to="/project">
                    <i className="fas fa-briefcase"></i> 
                </Link>
                <Link className="footer-link" to="/certificates">
                    <i className="fas fa-certificate"></i> 
                </Link>
                <Link className="footer-link" to="/contact">
                    <i className="fas fa-envelope"></i> 
                </Link>
            </div>
        </footer>
          </>
    );
};

export default Footer;
