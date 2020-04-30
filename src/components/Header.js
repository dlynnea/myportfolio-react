import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                <div className="brand-name">
                    <Link className="logo" to="/">D /M</Link>
                </div>
                <div className="hamburger">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/"><a href="#home">Home</a></Link>
                        </li>
                        <li>
                            {/* <Link to="/about">About</Link> */}
                            <a href="#about">About</a>
                        </li>
                        {/* <li>
                            <Link to="/services">Services</Link>
                        </li> */}
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        {/* <li>
                            <Link to="/skills">Skills</Link>
                        </li> */}
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}





