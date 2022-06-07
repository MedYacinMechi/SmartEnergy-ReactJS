import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from "@mui/material";
import HeaderAuth from "HeaderAuth";




const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + './images/backgroundImg_auto_x2.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));
export default function LoginPage(){
    const classes=useStyles();
    return (
    <div className={classes.root}>
        <CssBaseline/>
        <HeaderAuth/>
    </div>
    );
    
}