// import { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import React from 'react';
// import Button from '@material-ui/core/Button';
import { useStyles } from "./InputStyle";
import TextField from '@material-ui/core/TextField';
// import Sdata from './Sdata';
import AddIcon from '@material-ui/icons/Add';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainCollect}>
        <div className={classes.CollectText}>
            <Typography variant="h3">Freaquently Asked<br/>
Question</Typography>
            <Typography variant="body1">Wanna Ask Something?</Typography>

        </div>



        <form style={{display: "flex",flexWrap:"wrap",alignItems: "center", textAlign: "center", justifyContent: "center", color: "white"}} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="primary"/>
      <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="orange"/>
   
    </form>
   


    <form style={{display: "flex",flexWrap:"wrap !important",alignItems: "center", textAlign: "center", justifyContent: "center", color: "white"}} className={classes.root} noValidate autoComplete="off">
       <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="purple"/>
      <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="purple"/>
       
        </form>
        <form style={{display: "flex",flexWrap:"wrap",alignItems: "center", textAlign: "center", justifyContent: "center", color: "white"}} className={classes.root} noValidate autoComplete="off">
       <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="primary"/>
      <TextField id="standard-secondary" label="Lorem ipsum ipsum ?" color="purple"/>
       
        </form>
        </div>

    )
}

export default Contact;
