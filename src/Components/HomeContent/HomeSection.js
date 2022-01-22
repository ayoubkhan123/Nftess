import React from 'react';
import {useStyles} from "./HomeStyle";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import img1 from "../../Assets/Rectangle 15.png";
import img2 from "../../Assets/Rectangle 16.png";
import img3 from "../../Assets/Rectangle 17.png";
import img4 from "../../Assets/Rectangle 18.png";
import img5 from "../../Assets/Rectangle 19.png";
import img6 from "../../Assets/Rectangle 20.png";
import img7 from "../../Assets/Rectangle 21.png";

import binance from "../../Assets/Binance-Logo.wine (1).svg";
import block from "../../Assets/blockchain-1.svg";
import ethereum from "../../Assets/kindpng_1245980.png";


const HomeSection = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.mainSection}>
            <div className={classes.createNFT}>
                <Typography variant="h3" >Create, Sell & <br/>Collect Your Own <br/>Creative NFT</Typography>
                <Typography variant="body2" 
                style={{color: "rgba(255, 255, 255, 0.5)", fontWeight: "500", fontSize: "16px",paddingBottom: "15px"}}>
                Lorem ipsum dolor sit amet, consectetur<br/> 
                adipiscing elit. Nunc vulputate libero et velit.</Typography>
                <Button className={classes.btn1} variant="contained">Explore Now</Button>
                <Button className={classes.btn2} variant="outlined">Sell NFT</Button>
                <div className={classes.number}>
                    <Typography variant="h4">37k+ <br/><span className={classes.span1}>Artworks</span></Typography>
                    <Typography variant="h4">20k+<br/><span className={classes.span1}>Artists</span></Typography>
                    <Typography variant="h4">99k+<br/><span  className={classes.span1}>Aucations</span></Typography>

                </div>

            </div>

            <div className={classes.images}>
                <img style={{width: "140px", height: "110px"}} src={img1}/>
                <img style={{width: "140px", height: "90px"}} src={img2}/>
                <img style={{width: "140px", height: "190px"}} src={img3}/>
                <img style={{width: "140px", height: "190px", marginTop: "-20px"}} src={img5}/>
                <img style={{width: "140px", height: "95px"}} src={img4}/>
                <img style={{width: "140px", height: "115px", marginTop: "-20px"}} src={img6}/>
                <img className={classes.img4} src={img7}/>

            </div>
        </div>

        <div className={classes.binance}>

        <img style={{width: "160px",}} src={binance}/>
        <img style={{width: "150px", }} src={ethereum}/>
        <img style={{width: "150px",}} src={block}/>

        </div>
        </>
    )
}

export default HomeSection;
