import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {

    const handleClick = () => {
        console.log("click")
    }

    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div></div>
                <div className="brand-name">
                    <Link className="logo" to="/">D /M</Link>
                </div>
                <div className="navbar">
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
                     </div>
            </nav>
        </header>

        // <header>
        //     <div className="container">
        //         <div className="row">
        //         <div className="brand-name">
        //             <Link className="logo" to="/">D /M</Link>
        //         </div>
        //         <div className="hamburger" onClick={handleClick}>
        //             <i className="fa fa-bars"></i>
        //         </div>
        //         <div className="navbar">
        //             <ul>
        //                 <li>
        //                     <Link to="/"><a href="#home">Home</a></Link>
        //                 </li>
        //                 <li>
        //                     <a href="#about">About</a>
        //                 </li>
        //                 <li>
        //                     <Link to="/portfolio">Portfolio</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/blogs">Blogs</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/resume">Resume</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/contact">Contact</Link>
        //                 </li>
        //             </ul>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    )
}





