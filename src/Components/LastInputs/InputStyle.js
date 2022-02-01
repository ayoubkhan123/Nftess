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
    forms:{
      display: "flex",
      width: "100%",
      flexWrap: "wrap !important",

      // background: "green",
      textAlign: "center",
      // margin: "0px auto",
      // flexWrap: "wrap",
     
    },
 
    root: {
         display: "flex",
      width: "100%",
      textAlign: "center",
      "& MuiInputBase-input":{
          color: "white !important",
          padding: "100px",
      },
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
