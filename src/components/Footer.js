import React from 'react';

export default function Footer() {
    return(
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="social">
                        <a href='https://twitter.com/dlynneaa' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter"></i></a>
                        <a href='https://www.linkedin.com/in/danielle-matton/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin"></i></a>
                        <a href='https://www.youtube.com/channel/UCQOi5mHoizRD6CfirA1gHrQ?view_as=subscriber' target='_blank' rel='noopener noreferrer'><i className="fab fa-youtube"></i></a>
                        <a href='https://github.com/dlynnea' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                    </div>
                    <div className="logo">
                        Danielle
                    </div>
                </div>
            </div>
        </footer>
        <section className="copyright">
            <div className="container">
                <p>&copy; 2020 copyright &hearts;</p>
            </div>
        </section>
        </>
    )
}
