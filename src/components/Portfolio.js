import React, { Component } from 'react';
import one from '../images/img1.jpg';
import two from '../images/img2.jpg';
import three from '../images/img3.jpg';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    toggleActive = () => {
        console.log("click")
        this.setState({
            active: !this.state.active
        })
    }

    render() {
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
                                <li 
                                    className={this.state.active && 'active'}
                                    onClick={this.toggleActive}
                                >All</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="branding"
                                >Branding</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="photoshop"
                                >Photoshop</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="fashion"
                                >Fashion</li>
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
};

export default Portfolio;