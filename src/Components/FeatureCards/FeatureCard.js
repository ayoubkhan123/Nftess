// import { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from "./cardsStyle";
import Sdata from './Sdata';

const FeatureCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainCollect}>
        <div className={classes.CollectText}>
            <Typography variant="h3">Featured Artworks</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</Typography>

        </div>
        <div className={classes.cardflex}>
        {
             Sdata.map((elem) =>{
                 return(
        <div className={classes.cardflex1}>

                    <div className={classes.card}>
            <div>
                <img style={{width: "295px", height: "330px", borderRadius: "10px"}} src={elem.img}/>
            </div>

            <div className={classes.cardText}>
                <div className={classes.cardhead}><h4>{elem.name}</h4><br/><span>{elem.color}</span></div>
                <div className={classes.cardhead}>{elem.bid}<br/><span>{elem.etherm}</span></div>
            </div>

            <Button>place a bid</Button>


            </div>
               </div>

                 )
             })
               }
               </div>
            
        </div>
         
    
    )
}

export default FeatureCard;
