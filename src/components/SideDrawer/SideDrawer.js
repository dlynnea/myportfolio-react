import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = props => {
    let drawerClasses = 'sidedrawer';
    if (props.show) {
        drawerClasses = 'sidedrawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
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
        </nav>
    )
};

export default SideDrawer;