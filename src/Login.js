import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Checkbox from '@material-ui/core/Checkbox';

function Login() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="login">
            <div className="login__form">
                <div className="login__formTop">
                    <Link to="/">
                        <img src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="logo" />
                    </Link>
                    <h4>Welcome Back</h4>
                    <img
                        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-png-4.png"
                        alt="login"
                    />
                </div>
                <h4> OR </h4>
                <div className="login__formMiddle">
                    <input type="text" placeholder="Email or Username" />
                    <input type="password" placeholder="Password" />
                    <h5>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    Remember Me
                    <span className="login__formMiddle-space">
                            <Link>Forgot Password?</Link>
                        </span>
                    </h5>
                </div>
                <div className="login__formBottom">
                    <hr />
                    <h5>
                        Don't have an account?
                        <Link to="/signup"> Sign Up</Link>
                    </h5>
                    <img src="https://www.teleware.com/wp-content/uploads/2018/08/Google-play-and-istore-badges-300x104.jpg" alt="apple" />
                </div>
            </div>

        </div>
    )
}

export default Login
