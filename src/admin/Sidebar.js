import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="sidebar">
            {/* Member Detail */}
            <div className="sidebar__cardone">
                <div className="sidebar__cardone--title">
                    <p>Welcome back,</p>
                    <h3>{user.displayName ? user.displayName : "Dipendra Bahadur Chand"}</h3>
                    <span>
                        <h3>-{user?.email}</h3>
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
                <span className="sidebar__cardtwo--title">
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
            <div className="sidebar__cardthree">
                <h4>Polls</h4>
                <FormControl component="fieldset">
                    <FormLabel component="legend">What is your gender?</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    <p>
                        <Link> Skip Question</Link>
                        <Button type="submit" variant="outlined" color="primary" >Submit Answer</Button>
                    </p>
                </FormControl>
            </div>
        </div>
    )
}

export default Sidebar
