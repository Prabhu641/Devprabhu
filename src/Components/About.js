import React from "react";
import '../styless.css';

function ABOUT() {
    return (
        
       <div className="container d-flex mt-5 ">
        <div className="row">
            <div className="col col-12 col-md-6 ">
                <img src="./dev.webp" alt="prabu" className="img3 img-fluid rounded-circle"/>
            </div>
             <div className="col col-12 col-md-6">
                    <h1 className="h3 text-center head">About <span className="text-info ">Me</span></h1>
                    <p className="p1 text-secondary">
                        Hi! I’m Prabhu, an aspiring Front-End Developer with a passion for crafting engaging and user-friendly web experiences. My journey into web development began with a curiosity about how websites work, and it has grown into a deep love for building interactive applications.

I specialize in HTML, CSS, JavaScript, and React, and I’m dedicated to creating visually appealing and responsive designs. I believe that great user experience is essential, and I strive to write clean, efficient code that enhances accessibility.

I’m always eager to learn new technologies and improve my skills, keeping up with industry trends. I’m excited about the possibilities of web development and would love to connect with fellow developers and industry professionals. Let’s collaborate and bring innovative ideas to life!

                        </p>
            </div>

        </div>
       </div>
       
    );
}

export default ABOUT;
