import React from 'react';
import { Link } from 'react-router-dom';
import PDF from './Danielle-Matton.pdf';
import aboutMe from '../images/about2.JPG';


export const Home = () => {
    return (
        <>
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="home-content">
                        <div className="block">
                            <h6>Hello, My Name is</h6>
                            <h1>Dani Matton</h1>
                            <h3>Full Stack Web Developer, Software Engineer, Designer</h3>
                            <div className="cv-btn">
                                <a href={PDF} target="_blank">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h1>About Me</h1>
                    </div>
                {/* </div> */}
                {/* <div className="row"> */}
                <div className="img">
                    <img className="img" src={aboutMe} alt="about-me" />
                </div>
                    <div className="about-content">
                        {/* <div className="row"> */}
                            <div className="text">
                                <h4>Good Afternoon.</h4>
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
                                        <p><i class="fas fa-code"></i> The relief of finding your bug days later</p>
                                    </div>
                                    <div className="list">
                                        <p><i class="far fa-heart"></i> Pottery, Painting, Curation, Design</p>
                                    </div>
                                    <div className="list">
                                        <p> <i class="fas fa-code"></i> Playing with the user interface</p>
                                        </div>
                                    <div className="list">
                                        <p><i class="far fa-heart"></i> Spending time in the mountains, camping, hiking</p>
                                    </div>
                                    <div className="list">
                                        <p><i class="fas fa-code"></i> Learning new technologies, languages</p>
                                    </div>
                                    <div className="list">
                                        <p><i class="far fa-heart"></i> Traveling, learning new languages and culture</p>
                                    </div>
                                    <div className="list">
                                        <p><i class="fas fa-code"></i> Learning new technologies, languages</p>
                                    </div>
                                    <div className="list">
                                        <p><i class="far fa-heart"></i> Traveling, learning new languages and culture</p>
                                    </div>
                                </div>
                                <div className="social-links">
                                    {/* <span>You can find me on... </span> */}
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
