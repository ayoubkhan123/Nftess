import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from "./InputStyle";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';


const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainCollect}>
        <div className={classes.CollectText}>
            <Typography variant="h3">Freaquently Asked<br/>
Question</Typography>
            <Typography variant="body1">Wanna Ask Something?</Typography>

        </div>

<div className={classes.forms}>

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
        </div>

    )
}

export default Contact;
