import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Checkbox from '@material-ui/core/Checkbox';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(true);
    const [state, dispatch] = useStateValue();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login...
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/dashboard');
            })
            .catch(error => alert(error.message))
    }

    const signInGoogle = () => {
        //sign in code..
        auth
            .signInWithPopup(provider)
            .then((result) => {
                //console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                history.push('/dashboard');
            })
            .catch((error) => alert(error.message));
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
                        onClick={signInGoogle}
                        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-png-4.png"
                        alt="login"
                    />
                </div>
                <h4> OR </h4>
                <div className="login__formMiddle">
                    <input type="email" placeholder="Email or Username" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>
                        <Checkbox
                            checked="false"
                            color="primary"
                            onClick={handleChange}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    Remember Me
                    <span className="login__formMiddle-space">
                            <Link>Forgot Password?</Link>
                        </span>
                    </h5>
                    <button onClick={signIn} type="submit" className="login__signInButton"> Log In</button>
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
