import React from 'react';
import skills from '../images/skills.jpg';

export default function Skills() {
    return (
        <div className="skills">
            <div className="container">
                <div className="row align-items-center">
                    <div className="skills-content">
                        <div className="row">
                            <div className="section-title">
                                <h1>Professional Skills</h1>
                                <p>I design and develop services for customers specializing in creating stylish, modern websites</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="skill-box">
                                <h6>HTML</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "92%"}}>
                                        <span>92%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>CSS</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "82%"}}>
                                        <span>82%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>JavaScript</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "75%"}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>React</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "82%"}}>
                                        <span>82%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>Node</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "67%"}}>
                                        <span>67%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>Python</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "48%"}}>
                                        <span>48%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-box">
                                <h6>Ruby</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "88%"}}>
                                        <span>88%</span>
                                    </div>
                                </div>
                            </div>
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
