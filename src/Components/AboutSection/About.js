// import classes from '*.module.sass';
import { Typography } from '@material-ui/core'
import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./AboutStyle";
import img1 from "../../Assets/julian-hochgesang-39BKKhuy11k-unsplash 1.png";

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainAbout}>
        <Typography variant="h2">About Us</Typography>
        <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</Typography>


            <div className={classes.aboutFlex}>
                <div className={classes.photo}>
                    <img src={img1}/>
                </div>


                <div className={classes.nftPara}>
                    <Typography variant="h4" style={{color: "white",padding: "20px 0px",fontWeight: "bold"}}>Get Popular NFT</Typography>
                       <Typography variant="h6" style={{width: "460px", fontSize: "calc(0.5vw + 0.7rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </Typography>
                    <Button style={{background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",color: "white",fontWeight: "bold",marginBottom: "30px"}}>Show more</Button>
                </div>
            </div>
        </div>
    )
}

export default About;
