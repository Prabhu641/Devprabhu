import React from 'react';
import '../skills.css';

function Skills() {
    return (
        <div className="skills-page">
            <div className="header text-center mb-5">
                <h3 className='text-white'>Technical <span className='text-info'>Skills</span></h3>
              
              
       
            </div>

            <div className="skills-containers">
        
                <div className="skills-category">
             
                    <div className="skills-list">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'TypeScript','jquery','Nodejs', 'Express', 'MongoDB', 'Python', 'Django'].map((skill) => (
                            <div className="skill-card" key={skill}>
                                <img src={`./${skill.toLowerCase()}.png`} alt={skill} className="skill-icon" />
                                <span className="skill-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                    
                    
                </div>


        
                  
           
            </div>
        </div>
    );
}

export default Skills;