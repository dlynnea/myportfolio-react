import React from 'react'
import aboutMe from '../images/about2.JPG';

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h1>About Me</h1>
                        <p className="small text-uppercase">Information About Me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content">
                        <div className="row">
                            <div className="text">
                                <h4>I'm Danielle</h4>
                                <h6>A <span>Software Engineer</span> based in <span>Colorado</span></h6>
                                <p>I design and develop websites and applications, specializing in creating modern, stylish websites.</p>
                                <p>I'm extremely passionate about web development and design in all it's forms.</p>
                                <div className="info">
                                    <div className="list">
                                        <label>Birthday:</label>
                                        <p>September 27th 1990</p>
                                    </div>
                                    <div className="list">
                                        <label>Email:</label>
                                        <p>danimatton@gmail.com</p>
                                    </div>
                                    <div className="list">
                                        <label>Age:</label>
                                        <p>29</p>
                                    </div>
                                    <div className="list">
                                        <label>Phone:</label>
                                        <p>(503) 347-8432</p>
                                    </div>
                                    <div className="list">
                                    <label>Residence:</label>
                                        <p>Denver, CO</p>
                                        </div>
                                    <div className="list">
                                        <label>Github:</label>
                                        <p>dlynnea</p>
                                    </div>
                                    <div className="list">
                                        <label>Work:</label>
                                        <p>Seeking new opportunities</p>
                                    </div>
                                    <div className="list">
                                        <label>Freelance:</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href='https://www.linkedin.com/in/danielle-matton/' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-linkedin fa-2x' />
                                    </a>
                                    <a href='https://twitter.com/dlynneaa' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-twitter fa-2x' />
                                    </a>
                                    <a href='https://www.youtube.com/channel/UCQOi5mHoizRD6CfirA1gHrQ?view_as=subscriber' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-youtube fa-2x' />
                                    </a>
                                    <a href='https://github.com/dlynnea' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-github fa-2x' />
                                    </a>
                                </div>
                            </div>
                            <div className="img">
                                <img className="img" src={aboutMe} alt="about-me" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

