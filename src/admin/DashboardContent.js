import React from 'react';
import './DashboardContent.css';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function DashboardContent() {
    const classes = useStyles();

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
            <div className="dashboardContent__projects">
                <div className="dashboardContent__projects--heading">
                    <h3>Recent Projects</h3>
                    <button>Post a Project</button>
                </div>
                <div className="dashboardContent__projects--table">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Project / Contest Title</TableCell>
                                    <TableCell align="right">Bids/Entries</TableCell>
                                    <TableCell align="right">Average Bid</TableCell>
                                    <TableCell align="right">Close Date</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell align="left"><EmojiEventsIcon /> <Link>WordPress Website </Link></TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right"> - </TableCell>
                                <TableCell align="right">Inactive</TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p><Link>View All <ArrowRightAltIcon /></Link></p>
            </div>
            {/* News Feed */}

        </div>
    )
}

export default DashboardContent
