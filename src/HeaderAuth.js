import React, { useEffect, useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import { LoginRegister } from "LoginRegister";


const useStyles = makeStyles((theme)=>({
    root : {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

    },
    appbarTitle : {
        flexGrow: '1',
        fontSize:"2rem"
    },
    appbarWrapper: {
        width : '80%',
        margin : '0 auto',

    },
    icon : {
        color: '#fff',
        fontSize: '2rem',
    },
   
}));
export default function HeaderAuth(){
    const classes=useStyles();
    return (
    <div className={classes.root}>
        <AppBar  elevation={0} style={{backgroundColor: "transparent"}}>
         <Toolbar className={classes.appbarWrapper}>
            <img src={`${process.env.PUBLIC_URL}/images/logo-sofia-tech.png`}  alt="logo" width="250" height="50"></img>
            <h1 className={classes.appbarTitle}></h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div>
          <LoginRegister/> 
        </div>
    </div>
    );
    
}