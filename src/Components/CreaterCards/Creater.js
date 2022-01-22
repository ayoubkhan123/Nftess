// import { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from "./CreaterStyle";
import SSdata from './SSdata';
// import img3 from "../../Assets/NFTimages/dynamic-wang-TQFtvtTLMAg-unsplash 1.png";

// import Sdata from './Sdata';

const Creater = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainCollect}>
        <div className={classes.CollectText}>
            <Typography variant="h3">Top Creater</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</Typography>

        </div>




        <div className={classes.cardflex}>
        {
             SSdata.map((elem) =>{
                 return( 
        <div className={classes.cardflex1}>

                    <div className={classes.card}>
            <div>
                <img style={{width: "368px", height: "260px", borderRadius: "10px"}} src={elem.img}/>
            </div>
                        <div className={classes.circleimg}><img src={elem.imgpro}/></div>
            <div className={classes.cardText}>
                <div className={classes.cardhead}>
                <Typography variant="h4">{elem.name}</Typography></div>
                <div className={classes.cardhead}>
        <Typography variant="h6">{elem.para}</Typography></div>

            </div>

            <Button>+ Follow</Button>


            </div>
               </div>

                 )
             })
               } 
               </div>
            
        </div>
         
    
    )
}

export default Creater;
