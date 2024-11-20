import React from 'react';
import '../skills.css';

function Skills() {
    return (
        <div className="skills-page">
            <div className="header text-center mb-5">
                <h3 className='text-white'>My Technical <span className='text-info'>Skills</span></h3>
                <p className="text-secondary">Technologies I have experience in.</p>
            </div>

            <div className="skills-container">
                {/* Frontend Skills */}
                <div className="skills-category">
                    <h3 className="text-white">Frontend Technologies</h3>
                    <div className="skills-list">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'TypeScript','jquery'].map((skill) => (
                            <div className="skill-card" key={skill}>
                                <img src={`./${skill.toLowerCase()}.png`} alt={skill} className="skill-icon" />
                                <span className="skill-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="skills-category mt-4">
                    <h3 className="text-white">Backend Technologies</h3>
                    <div className="skills-list">
                        {['Nodejs', 'Express', 'MongoDB', 'Python', 'Django'].map((skill) => (
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