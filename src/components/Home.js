import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="home-content">
                        <div className="block">
                            <h6>Hello, My Name is</h6>
                            <h1>Dani Matton</h1>
                            <h3>Web Developer</h3>
                            <div className="cv-btn">
                                <Link to="/" className="btn">Download CV</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
