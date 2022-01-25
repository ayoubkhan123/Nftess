import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './../Navbar/NavbarStyle';

export const useStyles = makeStyles((theme) =>({
    mainCollect:{
        width: "100%",
        textAlign: "center",
    },
    CollectText:{
        color: "rgba(255, 255, 255, 0.5) !important",
        padding: "50px 0px",
        "& h3":{
            color: "white",
            fontWeight: "bold",
            paddingBottom: "10px",
        },

    },
    // form:{
    //   display: "flex",
    //   width: "100%",
    //   background: "green",
    //   textAlign: "center",
    //   margin: "0px auto",
    //   // flexWrap: "wrap",
    //   [theme.breakpoints.down('xs')]:{
    //     display: "block",
    //   },
    // },
 
    root: {
         display: "flex",
      width: "100%",
      textAlign: "center",
      margin: "0px auto",
      flexWrap: "wrap !important",
      // "& MuiInputBase-input":{
      //   color: "white",
      // },
       [theme.breakpoints.down('xs')]:{
            display: "block",
            width: "auto",
            height: "auto",
          },
        '& > *': {
          margin: theme.spacing(3),
          width: '40%',
          display: "flex",
          color: "white",
         
        },
      },
    
}))
