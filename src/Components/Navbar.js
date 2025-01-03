import React from "react";
import { Link } from "react-router-dom";
import '../navbar.css';

function Navbar() {
    return (
        <>
      
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid mx-5">
                <Link className="navbar-brand text-info" to="/">DevPrabhu</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center float-end">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/project">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/certificates">Certificates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
