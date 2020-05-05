import React, { Component } from 'react';
import skills from '../images/skills.jpg';
import PDF from './Danielle-Matton.pdf';

class Resume extends Component {

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
            <div className="resume">
            <div className="container">
                <div className="row align-items-center">
                    <div className="resume-content">
                        {/* <div className="row opportunity-row"> */}
                            {/* <div className="block">
                                <h3>Currently Open to new Opportunities</h3>
                                <div className="cv-btn">
                                    <a href={PDF} target="_blank" rel="noopener noreferrer">Download Resume <i class="fas fa-long-arrow-alt-down"></i></a>
                                </div>
                            </div> */}
                        {/* </div> */}
                        <div className="section-title">
                            <h1>Professional Skills</h1>
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
};

export default Resume;