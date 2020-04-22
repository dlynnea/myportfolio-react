import React from 'react';
import one from '../images/img1.jpg';

export default function LightBox() {
    return (
        <div className="lightbox">
            <span className="close-lightbox fa fa-close"></span>
            <img src={one} alt="portfolio" />
        </div>
    )
}
