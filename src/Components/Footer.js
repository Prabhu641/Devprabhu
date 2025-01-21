// src/components/Footer.js
import React from "react";
import "../footer.css"; // Ensure you have the updated custom CSS
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="footer">
                <div className="container">
                    <div className="footer-links row">
                        <div className="footer-header col-md-6 col-12">
                            <h5>© DevPrabhu 2024. All rights reserved.</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="footer-links-container d-flex">
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
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
