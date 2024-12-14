import React, { useEffect } from 'react';
import '../skills.css';
import "aos/dist/aos.css"; 
import AOS from "aos";

function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

   
    const skills = [
        { name: 'HTML', img: './html.png' },
        { name: 'CSS', img: './css.png' },
        { name: 'JavaScript', img: './javascript.png' },
        { name: 'React', img: './react.png' },
        { name: 'Bootstrap', img: './bootstrap.png' },
        { name: 'TypeScript', img: './typescript.png' },
        { name: 'jQuery', img: './jquery.png' },
        { name: 'Node.js', img: './nodejs.png' },
        { name: 'Express', img: './express.png' },
        { name: 'MongoDB', img: './mongodb.png' },
        { name: 'Python', img: './python.png' },
        { name: 'Django', img: './django.png' }
    ];

    return (
        <div className="skills-page" data-aos="fade-right">
            <div className="header text-center mb-5">
                <h3 className='text-white'>Technical <span className='text-info'>Skills</span></h3>
            </div>

            <div className="skills-containers">
                <div className="skills-category">
                    <div className="skills-list" data-aos="fade-right">
                        {skills.map((skill) => (
                            <div className="skill-card" key={skill.name}>
                                <img src={skill.img} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
