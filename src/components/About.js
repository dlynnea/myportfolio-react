import React from 'react'
import aboutMe from '../images/color.JPG';
import moment from 'moment';

export default function About() {

    let greetingText;
    const now = moment();
    const currentHour = now.hour();
    if ( currentHour < 12 ) {
        greetingText = 'Good morning.';
      } else if ( currentHour < 18 ) {
        greetingText = 'Good afternoon.';
      } else {
        greetingText = 'Good evening.';
      }

    return (
        <div className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h1>About Me</h1>
                </div>
            <div className="img">
                <img className="img" src={aboutMe} alt="about-me" />
            </div>
                <div className="about-content">
                    <div className="text">
                        <h4>{greetingText}</h4>
                        <h6>I'm Danielle, a <span>Software Engineer</span> based in <span>Colorado</span></h6>
                        <p>I'm a full-stack web developer with an instinct for design. 
                            I enjoy writing clean code and obsessing over colors, shapes 
                            and position. I don't like to define myself by the work I've done, 
                            but by the work I <span><strong>want</strong></span> to do. I am always learning, 
                            and I enjoy being challenged and engaging with projects that 
                            require me to step outside of my comfort zone.</p>
                        <div className="info">
                            <div className="list">
                                <label>As a developer I love...</label>
                            </div>
                            <div className="list">                            
                            <label>In my spare time I love...</label>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> Constantly learning new technologies & techniques</p>
                            </div>
                            <div className="list">
                                <p><span><i className="far fa-heart"></i></span> Pottery, Painting, Curation, Design</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> Creating what comes to mind</p>
                                </div>
                            <div className="list">
                                <p><span><i className="far fa-heart"></i></span> Music, live shows, the music culture</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> Planning, system design and implementation</p>
                            </div>
                            <div className="list">
                                <p><span><i className="far fa-heart"></i></span> Traveling, new language and culture, the unfamiliar</p>
                            </div>
                            <div className="list">
                                <p><span><i className="fas fa-code"></i></span> The ability to turn an idea into a product</p>
                            </div>
                            <div className="list">
                                <p><span><i className="far fa-heart"></i></span> Spending time in the mountains, camping, hiking</p>
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
                            </a><a href='https://medium.com/@danimatton' target='_blank' rel='noopener noreferrer'>
                                 <i className="fab fa-medium-m"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

