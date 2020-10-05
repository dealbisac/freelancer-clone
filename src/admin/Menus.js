import React from 'react';
import './Menus.css';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

function Menus() {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
        history.push("/login");
    }

    return (
        <div className="menus">
            <div className="menus__top">
                <div className="menus__top--left">
                    <Link to="/dashboard">
                        <img
                            className="header__logo"
                            src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                            alt="logo"
                        />
                    </Link>
                    <SearchIcon /> <h5>Browse</h5>
                    <DesktopWindowsIcon /> <h5>My&nbsp;Projects</h5>
                    <SmsIcon /> <h5>Messages</h5>
                    <NotificationsNoneIcon /><h5>Updates</h5>
                    <button> Post a Project</button>

                </div>

                <div className="menus__top--right">
                    <Avatar src={user.photoURL ? user.photoURL : "http://dipendrachand.com.np/images/profilepic.jpg"} />
                    <span>
                        {/* <h4>{user?.email}</h4> */}
                        <h4>{user?.email ? user?.email : 'chand.dipendra19@gmail.com'}</h4>
                        <h5>Rs. 95825.00</h5>
                    </span>
                    <ExpandMoreIcon
                        aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}
                    />
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleAuthentication}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

            <div className="menus__bottom">
                <span>
                    <h4> My Projects</h4>
                    <h4 className="menus__bottom--isActive"> Dashboard</h4>
                    <h4> Inbox</h4>
                    <h4> Feedback</h4>
                    <h4> Free Credit</h4>
                </span>
            </div>
        </div>
    )
}

export default Menus
