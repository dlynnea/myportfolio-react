import React from 'react';
import PDF from './DMRes.pdf';

export const Home = () => {
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-content">
                        <div className="block">
                            <h1>Danielle Matton</h1>
                            <h3 className="home-description">Full Stack Web Developer, <span>Software Engineer.</span></h3>
                            <div className="cv-btn">
                                <a href={PDF} target="_blank" rel="noopener noreferrer">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
