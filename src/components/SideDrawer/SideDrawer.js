import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = props => (
    <nav className="sidedrawer">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about"><a href="#about">About</a></Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default SideDrawer;