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
    
    card:{
        width: "370px",
        height: "510px",
        // border: "3px solid black",
        background: "rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        // marginBottom: "30px",
        borderRadius: "10px",
        paddingTop: "30px",
        "& Button":{
            background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",
            width: "300px",
            color: "white",
            fontWeight: "bold",
            marginTop: "25px",
        },
    },
    cardText:{
        display: "flex",
        justifyContent: "space-around",
        // width: "200px",
        "& div":{
            // display: "flex",
        },
    },
    cardhead:{
        fontSize: "15px",
            paddingTop: "10px",
            color: "rgba(255, 255, 255, 0.5)",
        "& span":{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
        },
    },
    cardflex:{
        width: "100%",
        display: "flex",
        margin: "auto",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        // gridTemplateColumns: "200px 200px",


    },

}))

