import { makeStyles } from '@material-ui/core/styles';
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
      textAlign: "center",
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
       [theme.breakpoints.down('xs')]:{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            padding: "10px",
            margin: "0px",
            // lineHight: "40px",
            width: "100%",
            // height: "auto",
          },
        '& > *': {
          margin: theme.spacing(3),
          width: '40%',
          display: "flex",
          color: "white",
         
        },
      },
    
}))
