import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


function Sidebar() {
    return (
        <div className="sidebar">
            {/* Member Detail */}
            <div className="sidebar__cardone">
                <div className="sidebar__cardone--title">
                    <p>Welcome back,</p>
                    <h3>Dipendra Bahadur Chand</h3>
                    <span>
                        <h3>@chand.dipendra19@gmail.com</h3>
                        <h6>FREE MEMBER</h6>
                    </span>
                </div>
                <div className="sidebar__cardone--progress">
                    <span>
                        <p>Set up your account</p>
                        <p>60%</p>
                    </span>
                    <LinearProgress variant="determinate" value={60} />
                </div>
                <div className="sidebar__cardone--english">
                    <span>
                        <ContactMailIcon />
                        <p><Link>Pass the US English Exam - Level 1</Link></p>
                        <p>+20%</p>
                    </span>
                </div>
                <div className="sidebar__cardone--balance">
                    <span>
                        <p>Account balance</p>
                        <p><Link>Deposit funds <ArrowRightAltIcon /></Link></p>
                    </span>
                    <p>$0.00USD</p>
                </div>
            </div>


            {/* Bid Summary */}
            <div className="sidebar__cardtwo">
                <span>
                    <h4>Bid Summary</h4>
                    <p><Link>View Insights</Link></p>
                </span>
                <span>
                    <h5>Remaining</h5>
                    <p>6/8</p>
                </span>
                <span>
                    <h5>Until next bid</h5>
                    <p>2 days</p>
                </span>
                <span>
                    <h5>Replenishment rate</h5>
                    <p>8x</p>
                </span>
            </div>


            {/* Polls */}
        </div>
    )
}

export default Sidebar
