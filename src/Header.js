import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                        alt="logo"
                    />
                </Link>
                <h4>How It Works</h4>
                <h4>Browse Jobs</h4>
            </div>

            <div className="header__right">
                <h4><Link to="/login">Log In</Link></h4>
                <h4><Link to="/signup">Sign Up </Link></h4>
                <button> Post a Project</button>
            </div>

        </div >
    )
}

export default Header
