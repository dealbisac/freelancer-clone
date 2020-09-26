import React from 'react';
import './Jobs.css';

function Jobs({ title }) {
    return (
        <div className="jobs">
            <img src="https://www.f-cdn.com/assets/main/en/assets/home/hire-categories/redesign/see-all.svg" alt="arrow" />
            <h5>{title}</h5>
        </div>
    )
}

export default Jobs
