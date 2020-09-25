import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    className="header__logo"
                    src="https://i.pinimg.com/564x/39/f8/30/39f83008cb63c447afc04b8d3816c023.jpg"
                    alt="logo"
                />
                <h4>How It Works</h4>
                <h4>Browse Jobs</h4>
            </div>

            <div className="header__right">
                <h4>Log In</h4>
                <h4>Sign Up</h4>
                <button> Post a Project</button>
            </div>

        </div>
    )
}

export default Header
