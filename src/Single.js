import React from 'react';
import './Single.css';

function Single({ src, title, content }) {
    return (
        <div className="single">
            <div className="single__top">
                <img src={src} alt="single" />
                <h3>{title}</h3>
            </div>
            <div className="single__bottom">
                <h6>{content}</h6>
            </div>

        </div>
    )
}

export default Single
