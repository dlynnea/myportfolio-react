import React from 'react';

function LightBox(props) {
    const { id, title, subtitle, img, link, selected } = props;
 
    return (
        <div className="lightbox">
            <span className="close-lightbox fa fa-close"></span>
            <img src={img} alt="portfolio" />
            <h3 className="title">{title}</h3>
            <p className="project-description">{subtitle}</p>
            <p className="project-description">{link}</p>
        </div>
    )
}

export default LightBox;
