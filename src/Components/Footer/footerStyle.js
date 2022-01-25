import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
    mainfooter:{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        // gridTemplateColumns: "245px 245px 245px 245px",
        flexWrap: "wrap",
        padding: "0px 20px",
        // gap: "10px",
    },
    footer1:{
        // width: "250px",
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
        // width: "250px",
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
        // width: "250px",
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
        // width: "250px",
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