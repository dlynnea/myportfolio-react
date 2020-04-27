import React from 'react';

export default function Footer() {
    return(
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="social">
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                        <a href=""><i className="fab fa-github"></i></a>
                    </div>
                    <div className="logo">
                        Danielle
                    </div>
                </div>
            </div>
        </footer>
        <section className="copyright">
            <div className="container">
                <p>&copy; 2020 copyright all rights reserved</p>
            </div>
        </section>
        </>
    )
}
