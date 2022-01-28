import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from "./NavbarStyle";
// import { theme} from '@material-ui/core/styles';
// import {useTheme, theme, createStyles } from '@material-ui/core/styles';
import { Link, Navigate } from "react-router-dom";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import theme from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Header = () => {

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (
      <>
        <div className={classes.Navbar}>
        <div className={classes.searchbr}>
        <div><Typography style={{fontFamily: "Poppins"}} variant="h4">physho<span style={{color: "blue"}}>Art</span></Typography></div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Items.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>

        <div className={classes.links}>
            <Link className={classes.link1} activeStyle={{color: "blue"}} to="/">Collections</Link>
            <Link className={classes.link1} to="/feature">Feature</Link>
            <Link className={classes.link1} to="/faq">FAQ</Link>

       <Button variant="contained">Select Wallet</Button> 
        </div>
          
        </div>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
     
        <div className={classes.drawerHeader}>
        
        <ArrowForwardIosIcon style={{cursor: "pointer",marginLeft: "10px",color: "white",marginTop: "40px",fontSize: "30px"}} onClick={handleDrawerClose}/>
     
        </div>
          <nav className={classes.Mblinks} style={{marginTop: "20px"}}>
          <li><a>Collections</a></li>
          <li><a>Features</a></li>
          <li><a>FAQ</a></li>



          </nav>

          {/* <MenuIcon style={{fontSize: "35px",position: "absolute",top: "40px",right: "20px",color: "white",}} onClick={handleDrawerOpen}/> */}

        </Drawer>
        <div className={classes.menu}>
        <MenuIcon className={classes.work} onClick={handleDrawerOpen}/>
        </div>
        </>
    )
}

export default Header;
