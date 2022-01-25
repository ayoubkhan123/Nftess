import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './../Navbar/NavbarStyle';

export const useStyles = makeStyles((theme) =>({
    mainCollect:{
        width: "100%",
        textAlign: "center",
    },
    CollectText:{
        color: "rgba(255, 255, 255, 0.5) !important",
        "& h3":{
            color: "white",
            fontWeight: "bold",
            paddingBottom: "10px",
        },

    },
    Buttons:{
        display: "flex",
        height: "20vh",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px 0px",
        "& Button":{
            width: "230px",
            fontWeight: "bold",
            borderRadius: "10px",
            marginBottom: "20px",
        },
    },

}))
