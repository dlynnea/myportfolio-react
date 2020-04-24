import React from 'react';

function LightBox(props) {
    const { id, title, subtitle, img, link, selected } = props;
    return (
        <div className="lightbox">
            <span className="close-lightbox fa fa-close"></span>
            <img src={img} alt="portfolio" />
        </div>
    )
}

export default LightBox;
