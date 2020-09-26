import React from 'react';
import './Feature.css';

function Feature({ src, title, content }) {
    return (
        <div className="feature">
            <img src={src} alt="" />
            <div className="feature__info">
                <h4>{title}</h4>
                <h6>{content}</h6>
            </div>
        </div>
    )
}

export default Feature
