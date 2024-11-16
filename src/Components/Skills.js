import React from 'react';
import '../skills.css';

function Skills() {
    return (
        <div className="skills-page">
            <div className="header">
                <h3 className='text-white'>My Technical <span  className='text-info'>Skills</span></h3>
                <p>Technologies I work with and have hands-on experience with.</p>
            </div>

            <div className="skills-container">
                {/* Frontend Skills */}
                <div className="skills-category">
                    <h3>Frontend Technologies</h3>
                    <ul className="skills-list">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'TypeScript'].map((skill) => (
                            <li className="skill-item" key={skill}>
                                <img src={`./${skill.toLowerCase()}.png`} alt={skill} className="skill-icon" />
                                <span className="skill-name">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Backend Skills */}
                <div className="skills-category">
                    <h3>Backend Technologies</h3>
                    <ul className="skills-list">
                        {['Nodejs', 'Express', 'MongoDB', 'Python', 'Django'].map((skill) => (
                            <li className="skill-item" key={skill}>
                                <img src={`./${skill.toLowerCase()}.png`} alt={skill} className="skill-icon" />
                                <span className="skill-name">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
