import React from 'react';
import './Projects.css';
import Project from './Project';

function Projects() {
    return (
        <div className="projects">
            <div className="projects__heading">
                <h3>Crowd favorites <br />
                Here are some of our most popular projects:</h3>
            </div>
            <div className="projects__project">
                <Project
                    src="https://image.freepik.com/free-psd/hiking-concept-web-template_23-2148467097.jpg"
                    title="Website Development"
                    price="From $300 USD"
                />
                <Project
                    src="https://image.freepik.com/free-photo/image-creative-graphic-designer-working-color-selection-drawing-graphics-tablet_28283-898.jpg"
                    title="Graphic Design"
                    price="From $300 USD"
                />
                <Project
                    src="https://image.freepik.com/free-vector/lovely-floral-ornamental-logos-collection-design-set_1017-25867.jpg"
                    title="Logo Design"
                    price="From $50 USD"
                />
            </div>
            <div className="projects__project">
                <Project
                    src="https://image.freepik.com/free-photo/marketing-strategy-connting-digital-devices-concept_53876-23053.jpg"
                    title="Marketing"
                    price="From $150 USD"
                />
                <Project
                    src="https://image.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg"
                    title="Writing"
                    price="From $50 USD"
                />
                <Project
                    src="https://image.freepik.com/free-vector/goals-habits-tracking-app-collection_23-2148669655.jpg"
                    title="Mobile App"
                    price="From $50 USD/ hour"
                />
            </div>
            <div className="projects__more">
                <button>See More</button>
            </div>

        </div>
    )
}

export default Projects
