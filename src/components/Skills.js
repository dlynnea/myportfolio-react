import React, { Component } from 'react';
import skills from '../images/skills.jpg';

class Skills extends Component {

    state = {
        skills: [
            {
                id: 0,
                tech: 'Ruby',
                level: '86%',
            },
            {
                id: 1,
                tech: 'Node',
                level: '67%',
            },
            {
                id: 2,
                tech: 'Python',
                level: '48%',
            },
            {
                id: 3,
                tech: 'React',
                level: '80%',
            },
            {
                id: 4,
                tech: 'JavaScript',
                level: '78%',
            },
            {
                id: 5,
                tech: 'HTML',
                level: '92%',
            },
            {
                id: 6,
                tech: 'CSS',
                level: '88%',
            },
        ]
    }

    render() {
        return (
            <div className="skills">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="skills-content">
                            <div className="row">
                                <div className="section-title">
                                    <h1>Professional Skills</h1>
                                    {/* <p>I design and develop services for customers specializing in creating stylish, modern websites</p> */}
                                </div>
                            </div>
                            <div className="row">
                            {this.state.skills.map(skill => (
                                <div key={skill.id} className="skill-box">
                                    <h6>{skill.tech}</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width: skill.level}}>
                                            <span>{skill.level}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="img">
                            <img src={skills} alt="skills" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
