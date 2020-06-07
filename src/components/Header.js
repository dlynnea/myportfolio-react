import React from 'react'
import { Link } from 'react-router-dom';
import DrawerToggleButton from './SideDrawer/DrawerToggle';

export function Header(props) {

    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div className="brand-name">
                    <Link className="logo" to="/">D <span className="logo-span">/</span>M</Link>
                </div>
                <div className="spacer"></div>
                <div className="navbar">
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
                         {/* <li>
                             <Link to="/resume">Resume</Link>
                         </li> */}
                         <li>
                             <Link to="/contact">Contact</Link>
                         </li>
                     </ul>
                </div>
                <div className="toolbar-toggle-button">
                    <DrawerToggleButton click={props.drawerToggleClickHandler} />
                </div>
            </nav>
        </header>
    )
}





