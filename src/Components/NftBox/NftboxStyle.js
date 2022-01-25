// import { colors } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
    box_container:{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    child_box:{
        width: "80%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "45vh",
        borderRadius: "10px",
        background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)", 
        "& h3":{
            fontSize: "calc(1.8rem + 1vw)",
            fontWeight: "bold",
            color: "white",
        },
    },
    btn1:{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        margin: "0px auto",
        color: "white",
        fontWeight: "bold",
        background: "rgba(255, 255, 255, 0.5)",
        width: "160px",
        height: "50px",
        "&:hover":{
            color: "white",
            background: "rgba(255, 255, 255, 0.5)",

        },
    },

}))


