import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './../Components/HomeContent/HomeStyle';

export const useStyles = makeStyles((theme) =>({
mainAbout:{
    width: "100%",
    height: "auto",
    paddingBottom: "50px",
    textAlign: "center",
    "& h2":{
        // marginTop: "-100px",
        paddingBottom: "6px",
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "white",
        fontSize: "calc(1vw + 2.5rem)",
    },
    "& h6":{
        paddingBottom: "40px",
        color: "rgba(255, 255, 255, 0.5)",
    },
},
aboutFlex:{
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap-reverse",
},
photo:{
    "& img":{
        width: "440px",
        height: "520px",
        borderRadius: "10px",
    },
 
},
nftPara:{
    textAlign: "left",
    [theme.breakpoints.down('sm')]:{
textAlign: "center",
    },
},


}))