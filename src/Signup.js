import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

function Signup() {
    return (
        <div className="signup">
            <div className="signup__form">
                <div className="signup__formTop">
                    <Link to="/">
                        <img src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="logo" />
                    </Link>
                    <h4>Sign Up</h4>
                    <img
                        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-png-4.png"
                        alt="login"
                    />
                </div>
                <h4> OR </h4>
                <div className="signup__formMiddle">
                    <input type="text" placeholder="Email or Username" />
                    <input type="password" placeholder="Password" />
                    <h5>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> I agree to the Freelancer  and
                            <Link> User Agreement </Link> and
                            <Link> Privacy Policy. </Link>
                    </h5>
                    <button>Join Freelancer</button>
                </div>
                <div className="signup__formBottom">
                    <hr />
                    <h5>
                        Already have an account?
                        <Link to="/login"> Log in</Link>
                    </h5>
                </div>
            </div>


        </div >
    )
}

export default Signup
