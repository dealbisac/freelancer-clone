import React from 'react';
import './Data.css';

function Data({ src, title, subtitle, content, btn }) {
    return (
        <div className="data">
            <div className="data__one">
                <img src={src} alt="data-dp" />
            </div>
            <div className="data__two">
                <h5>{title}</h5>
                <h3>{subtitle}</h3>
                <h4>{content}</h4>
                <button>{btn}</button>

            </div>

        </div>
    )
}

export default Data
