import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { auth } from './firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();
        //some fancy firebase login...
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
            })
            .catch(event => alert(event.message))
    }

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
                    <input type="email" placeholder="Email or Username" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> I agree to the Freelancer  and
                            <Link> User Agreement </Link> and
                            <Link> Privacy Policy. </Link>
                    </h5>
                    <button onClick={register} type="submit" className="login__signInButton"> Join Freelancer</button>
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
