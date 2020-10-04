import React from 'react';
import './DashboardContent.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function DashboardContent() {
    return (
        <div className="dashboardContent">
            {/* Card */}
            <div className="dashboardContent__card">
                <span>
                    <h4>Refer a friend, get $20 USD</h4>
                    <p>If you enjoy using Freelancer, share it with friends and colleagues to earn free credits.</p>
                    <button>Invite Now <ArrowRightAltIcon /></button>
                </span>
                <span>
                    <img src="https://www.f-cdn.com/assets/main/en/assets/banners/give-get/T104418-give-get-banner-present.png" />
                </span>
            </div>



            {/* Projects */}
            {/* News Feed */}

        </div>
    )
}

export default DashboardContent
