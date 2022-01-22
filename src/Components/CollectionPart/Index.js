// import { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useStyles } from "./IndexStyle";

const Index = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainCollect}>
        <div className={classes.CollectText}>
            <Typography variant="h3">Colleaction</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</Typography>

        </div>
            

            <div className={classes.Buttons}>
                <Button variant="outlined" style={{background: "rgba(255, 255, 255, 0.1)", color: "white"}}>Art</Button>
                <Button variant="contained" style={{background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)", color: "white"}}>Sport</Button>
                <Button variant="outlined" style={{background: "rgba(255, 255, 255, 0.1)", color: "white"}}>Photography</Button>
                <Button variant="outlined" style={{background: "rgba(255, 255, 255, 0.1)", color: "white"}}>Pattern</Button>

            </div>
        </div>
         
    
    )
}

export default Index;
