import React from 'react';
import './Portfolio.css';
import Data from './Data';

function Portfolio() {
    return (
        <div className="portfolio">
            <Data
                src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api_upsell.png"
                title="FREELANCER API"
                subtitle="43 million professionals on demand"
                content="Why hire people when you can simply integrate our talented cloud workforce instead?"
                btn="View Documentation"
            />
            <Data
                src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/enterprise_upsell.png"
                title="FREELANCER ENTERPRISE"
                subtitle="Company budget? Get more done for less"
                content="Use our workforce of 43 million to help your business achieve more."
                btn="Contact Us"
            />
        </div>
    )
}

export default Portfolio
