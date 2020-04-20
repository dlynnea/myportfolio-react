import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                <div className="brand-name">
                    <Link className="logo" to="/">Danielle</Link>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link className="link active" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Services</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Blog</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}





