import React from "react";
import '../styless.css'; 

function Skills() {
    return (
        <div className="container">
            <h1 className="h3 text-white text-center m-4">
                Technical <span className="text-info">Skills</span>
            </h1>
            <div className="row g-4"> 
                <div className="col col-12 col-md-6 d-flex">
                    <div className="content  p-3 flex-fill">
                        <h4 className="text-white m-2">FrontEnd</h4>
                        <div className="images p-4 d-flex flex-wrap justify-content-center align-items-center">
                            <div className="border m-2 px-2">
                                <img src="./html.png" alt="html" className="img-fluid rounded-circle" title="HTML" />
                                <span className="text-white">HTML</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./css.png" alt="css" className="img-fluid rounded-circle" title="CSS" />
                                <span className="text-white">CSS</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./boot.jfif" alt="bootstrap" className="img-fluid rounded-circle" title="BOOTSTRAP" />
                                <span className="text-white">Bootstrap</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./js.png" alt="js" className="img-fluid rounded-circle" title="JAVASCRIPT" />
                                <span className="text-white">JavaScript</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./ts.png" alt="typescript" className="img-fluid rounded-circle" title="TYPESCRIPT" />
                                <span className="text-white">TypeScript</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./react.png" alt="react" className="img-fluid rounded-circle" title="REACT" />
                                <span className="text-white">React</span>
                            </div>
                               <div className="border m-2 px-2">
                                <img src="./jquery.png" alt="react" className="img-fluid rounded-circle" title="REACT" />
                                <span className="text-white">Jquery</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-md-6 d-flex">
                    <div className="content p-3 flex-fill">
                        <h4 className="text-white m-2">BackEnd</h4>
                        <div className="images p-4 d-flex flex-wrap justify-content-center align-items-center">
                            <div className="border m-2 px-2">
                                <img src="./python.jfif" alt="python" className="img-fluid rounded-circle" title="PYTHON" />
                                <span className="text-white">Python</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./node.webp" alt="node" className="img-fluid rounded-circle" title="NODE JS" />
                                <span className="text-white">Node.js</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./angular.png" alt="angular" className="img-fluid rounded-circle" title="ANGULAR JS" />
                                <span className="text-white">Angular</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./django.png" alt="django" className="img-fluid rounded-circle" title="DJANGO" />
                                <span className="text-white">Django</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./express.png" alt="express" className="img-fluid rounded-circle" title="EXPRESS JS" />
                                <span className="text-white">Express.js</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./mongo.png" alt="mongo" className="img-fluid rounded-circle" title="MONGO DB" />
                                <span className="text-white">MongoDB</span>
                            </div>
                            <div className="border m-2 px-2">
                                <img src="./sql.webp" alt="sql" className="img-fluid rounded-circle" title="SQL" />
                                <span className="text-white">SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
