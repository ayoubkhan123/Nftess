import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
    mainfooter:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "20px",
        flexWrap: "wrap",
        [theme.breakpoints.down('xs')]:{
                display: "block",
        },
        padding: "0px 20px",
    },
    footer1:{
        paddingBottom: "25px",

"& h5":{
    color: "white",
    fontWeight: "bold",
    paddingBottom: "25px",

}, 
"& h6":{
color: "rgba(255, 255, 255, 0.5)",
},

    },

    footer2:{
        paddingBottom: "25px",
        "& h5":{
            color: "white",
            fontWeight: "bold",
            paddingBottom: "25px",
        },
        "& h6":{
        color: "rgba(255, 255, 255, 0.5)",
        paddingBottom: "20px",
        },
        
            },
           

      footer3:{
        paddingBottom: "25px",
       "& h5":{
        fontWeight: "bold",
     color: "white",
     paddingBottom: "25px",

     },
     "& h6":{
    color: "rgba(255, 255, 255, 0.5)",
    paddingBottom: "20px",

          },
                
        },
                   
     footer4:{
        paddingBottom: "25px",

          "& h5":{
         color: "white",
         fontWeight: "bold",
         paddingBottom: "25px",

           },
        "& h6":{
      color: "rgba(255, 255, 255, 0.5)",
      paddingBottom: "20px",

          },
                        
         },
                           
   
                                   
                                                          
}))