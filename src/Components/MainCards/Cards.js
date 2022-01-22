import React from 'react';
import { useStyles } from "./CardsStyle";
import Button from '@material-ui/core/Button';
import Carddata from "./Carddata";



const Cards = () => {
    const classes = useStyles();
    return (
        <div className={classes.Cards_Main}>
         {
             Carddata.map((elem) =>{
                 return(
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

                 )
             })
               }
        </div>
    )
}

export default Cards;
