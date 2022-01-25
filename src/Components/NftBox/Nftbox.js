import React from 'react';
import { useStyles } from "./NftboxStyle";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const Nftbox = () => {
    const classes = useStyles();
    return (
        <div className={classes.box_container}>
            <div className={classes.child_box}>
                <Typography variant="h3">Get ready to collect<br/> <br/>our NFT</Typography>
                <Button className={classes.btn1}>Get Started</Button>

           </div>
        </div>
    )
}

export default Nftbox;
