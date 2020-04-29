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
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/* <li>
                            <Link to="/services">Services</Link>
                        </li> */}
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
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





