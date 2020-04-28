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
                                <h4>Hello.</h4>
                                <h6>I'm Danielle, a <span>Software Engineer</span> based in <span>Colorado</span></h6>
                                <p>I'm a full-stack web developer with an instinct for design. I enjoy writing clean code and then obsessing over colors, shapes and position.</p>
                                <div className="info">
                                    <div className="list">
                                        <label>As a developer I love...</label>
                                    </div>
                                    <div className="list">                            
                                    <label>In my spare time I love...</label>
                                    </div>
                                    <div className="list">
                                        <p>The relief of finding your bug days later</p>
                                    </div>
                                    <div className="list">
                                        <p>Pottery</p>
                                    </div>
                                    <div className="list">
                                        <p>Playing with the user interface</p>
                                        </div>
                                    <div className="list">
                                        <p>Spending time in the mountains</p>
                                    </div>
                                    <div className="list">
                                        <p>Learning new technologies, languages</p>
                                    </div>
                                    <div className="list">
                                        <p>Traveling</p>
                                    </div>
                                </div>
                                {/* <div className="info">
                                    <div className="list">
                                        <label>Birthday:</label>
                                        <p>September 27th</p>
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
                                        <label>From:</label>
                                        <p>Portland, OR</p>
                                    </div>
                                    <div className="list">
                                        <label>Work:</label>
                                        <p>Seeking new opportunities</p>
                                    </div>
                                </div> */}
                                <div className="social-links">
                                    <p>You can find me on... </p>
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

