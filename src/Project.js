import React from 'react';
import './Project.css'

function Project({ src, title, price }) {
    return (
        <div className="project">
            <img src={src} alt="project-logo" />
            {/* <button>Post a project like this.</button> */}
            <div className="project__bottom">
                <h2>{title}</h2>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Project
