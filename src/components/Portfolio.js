import React from 'react';
import one from '../images/img1.jpg';
import two from '../images/img2.jpg';
import three from '../images/img3.jpg';

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center">
                        <h1>My Latest Work</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="filter-buttons">
                        <ul>
                            <li className="active">All</li>
                            <li data-target="branding">Branding</li>
                            <li data-target="photoshop">Photoshop</li>
                            <li data-target="fashion">Fashion</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-gallery">
                        <div className="item" data-id="branding">
                            <img src={one} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>Branding</h4>
                            </div>
                        </div>
                        <div className="item" data-id="photoshop">
                            <img src={three} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>Photoshop</h4>
                            </div>
                        </div>
                        <div className="item" data-id="fashion">
                            <img src={one} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>Fashion</h4>
                            </div>
                        </div>
                        <div className="item" data-id="branding">
                            <img src={three} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>branding</h4>
                            </div>
                        </div>
                        <div className="item" data-id="fashion">
                            <img src={one} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>Fashion</h4>
                            </div>
                        </div>
                        <div className="item" data-id="photoshop">
                            <img src={three} alt="portfolio-img" />
                            <div className="overlay">
                                <span className="fa fa-plus"></span>
                                <h4>Photoshop</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}