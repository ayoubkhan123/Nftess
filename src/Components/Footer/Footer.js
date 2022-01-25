import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './footerStyle';

const Footer1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainfooter}>
            <div className={classes.footer1}>
            <Typography variant="h5">physho<span style={{color: "blue"}}>Art</span></Typography>
            <Typography variant="h6">The best NFT marketplace website in <br/>the world and feel your experience in<br/> selling or buy our work</Typography>
            </div>

            <div className={classes.footer2}>
                <Typography variant="h5">About</Typography>
                <Typography variant="h6">Product</Typography>
                <Typography variant="h6">Resource</Typography>
                <Typography variant="h6">Term & Condition</Typography>
                <Typography variant="h6">FAQ</Typography>



            </div>


            <div className={classes.footer3}>
            <Typography variant="h5">Company</Typography>
                <Typography variant="h6">Our Team</Typography>
                <Typography variant="h6">Partner With us</Typography>
                <Typography variant="h6">Privacy & policy</Typography>
                <Typography variant="h6">Features</Typography>
            </div>

            <div className={classes.footer4}>
            <Typography variant="h5">Contact</Typography>
                <Typography variant="h6">03465066304</Typography>
                <Typography variant="h6">khan@gmail.com</Typography>
            </div>


        </div>
    )
}

export default Footer1;
