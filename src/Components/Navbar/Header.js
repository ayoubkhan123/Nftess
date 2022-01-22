import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from "./NavbarStyle";
// import { theme} from '@material-ui/core/styles';
// import {useTheme, Theme, createStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";
import "./Header.css";


import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Header = () => {
  const [open, setOpen] = useState(false);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (
      <>
        <div className={classes.Navbar}>
        <div className={classes.searchbr}>
        <div><Typography style={{color: "white",fontFamily: "Poppins"}} variant="h4">physho<span style={{color: "blue"}}>Art</span></Typography></div>
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
            <Link className={classes.link1} to="/">Collections</Link>
            <Link className={classes.link1} to="/feature">Feature</Link>
            <Link className={classes.link1} to="/faq">FAQ</Link>

       <Button variant="contained">Select Wallet</Button> 
        </div>

            
        </div>



        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <h1>helooooooooooo</h1>
          <IconButton onClick={handleDrawerClose}>
          {/* {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
          </IconButton>
        </div>
        </Drawer>
        </>
    )
}

export default Header;
