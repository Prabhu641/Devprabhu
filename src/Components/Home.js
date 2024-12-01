import React from "react"; 
// import $ from "jquery";
import '../styless.css'; 


function HOME() {
   

    const handleHireMeClick = () => {
        alert("Thanks for considering me!"); 
        setTimeout(() => {
            window.location = 'https://www.linkedin.com/in/prabhudeveloper/';
        }, 2000);
    };

    const handleDownloadCVClick = () => {
        alert("CV is downloading!");
      
    };

    // useEffect(() => {
       
    //     $("body").css("background-color", bgColor);


    //     $("body").click(function() {
    //         const newColor = bgColor === "black" ? "white" : "black"; 
    //         setBgColor(newColor);
    //         $("body").css("background-color", newColor);
    //     });
    // }, [bgColor]); 

    return (
        <div className='container m-5 p-5'>
            <div className="row"> 
                <div className="col-12 col-md-6"> 
                    <h1 className='h1' >Hi, I'm Prabhu!</h1>
                    <h2 className="h2" >Front-End Developer</h2>
                    <p className="p text-secondary">
                        Passionate about crafting responsive web applications.<br />
                    </p>
                    <div className="links mb-3">
                        <a href="https://www.linkedin.com/in/prabhudeveloper/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x mx-2 fab1"></i>
                        </a>
                        <a href="https://github.com/Prabhu641" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x mx-2 fab1"></i>
                        </a>
                        <a href="mailto:your-email@example.com">
                            <i className="fa fa-envelope fa-2x mx-2 fab1"></i>
                        </a>
                    </div>
                    <div className="d-flex"> 
                        <button className="btn btn-outline-primary" onClick={handleHireMeClick}>Hire Me</button>
                        <button className="btn btn-outline-secondary mx-2" onClick={handleDownloadCVClick}>Download CV</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 ">
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
