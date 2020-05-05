import React from 'react';
import PDF from './Danielle-Matton.pdf';

export const Home = () => {
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-content">
                        <div className="block">
                            <h1>Dani Matton</h1>
                            <h3>Full Stack Web Developer, Software Engineer, Designer</h3>
                            {/* <div className="cv-btn">
                                <a href={PDF} target="_blank" rel="noopener noreferrer">Resume</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
