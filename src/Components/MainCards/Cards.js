import React,{useState} from 'react';
import { useStyles } from "./CardsStyle";
import Button from '@material-ui/core/Button';
import Carddata from "./Carddata";



const Cards = () => {
    const classes = useStyles();
    const [set, setData] = useState(3);
    const loadMore = () => {
        setData(set + set);
    }
    const slice = Carddata.slice(0, set)
    return (
        <>
        <div className={classes.Cards_Main}>
         {
             slice.map((elem) =>{ 
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
        <div style={{display: "flex",justifyContent: "center"}}>
        <Button onClick={loadMore} variant="contained" color="success" style={{fontWeight: "bold"}}>loadmore</Button>
</div>
        </>
    )
}

export default Cards;
