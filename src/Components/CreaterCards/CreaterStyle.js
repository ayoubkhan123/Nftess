import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './../Navbar/NavbarStyle';

export const useStyles = makeStyles((theme) =>({
    mainCollect:{
        width: "100%",
        textAlign: "center",
        paddingTop: "60px",
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
    
    card:{
        width: "370px",
        height: "510px",
        position: "relative",
        // border: "3px solid black",
        background: "rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        marginBottom: "30px",
        borderRadius: "10px",
        // paddingTop: "30px",
        "& Button":{
            background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",
            width: "300px",
            color: "white",
            fontWeight: "bold",
            marginTop: "25px",
        },
    },
    cardText:{
        paddingTop: "60px",
        margin: "auto",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        "& h4":{
                color: "white",
                fontWeight: "bold",
        },
        "& h6":{
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "16px",
        width: "300px",
    },
    },
    circleimg:{
        position: "absolute",
        top: "38%",
        left: "32%",
        width: "130px",
        height: "120px",
        // background: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "60px",
        "& img":{
            width: "128px",
            height: "120px",
            borderRadius: "60px",
        },
    },
  
    cardflex:{
        width: "100%",
        display: "flex",
        margin: "auto",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",


    },

}))

