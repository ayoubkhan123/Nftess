import { makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
    mainSection:{
        width: "100%",
        height: "100vh",
        // paddingBottom: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontFamily: "Poppins",
        [theme.breakpoints.down('sm')]:{
            height: "auto",
            paddingBottom: "10px",
            marginTop: "130px",
        },
        flexWrap: "wrap",
    },
    createNFT:{
        width: "430px",
        [theme.breakpoints.down('xs')]:{
            // margin: "0px 10px",
            textAlign: "center",
        },
        "& h3":{
            color: "white",
            paddingBottom: "10px",
            fontStyle: "bold",
            fontWeight: "bold",
            fontFamily: "Poppins",

        },
      
    },
    btn1:{
        background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",
        color: "white",
        fontWeight: "bold",
        borderRadius: "10px",
    },
    btn2:{
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        borderRadius: "10px",
        fontWeight: "bold",
        marginLeft: "30px",
        "&:hover":{
            background: "rgba(255, 255, 255, 0.1)",

        },

    },
    number:{
        display: "flex",
        gap: "85px",
        [theme.breakpoints.down('xs')]:{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            gap: "20px",
        },
        "& h4":{
            // display: "flex",
            fontWeight: "bold",
            color: "white",
            padding: "25px 0px",
        },
     
        "& span":{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "18px",
            // marginTop: "30px",
            // paddingTop: "40px",
        },
        [theme.breakpoints.down('md')]:{
            paddingBottom: "40px",
        },
      
    },
    images:{
        // "& img":{
        //     width: "100px",
        //     height: "100px",
        // },
        position: "relative",
        display: "grid",
        // background: "green",
        gridTemplateColumns: "150px 160px",
        gridGap: "10px 0px",
        width: "500px",
        height: "440px",
        paddingBottom: "20px",
        [theme.breakpoints.down('xs')]:{
            // display: "none",
            width: "100%",
            textAlign: "center",
            gridGap: "0px 0px",
            marginLeft: "15px",
            display: "grid",
            justifyContent: "center",
        },
    },
    img4:{
        width: "160px ",
        height: "300px !important",
        position: "absolute",
        left: "61%",
        top: "12%",
        [theme.breakpoints.down('xs')]:{
            display: "none",
        },
    },

    binance:{
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "30px",
    },
}))