import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from "Cards";
import services from "Services";
import useWindowPosition from "./hooks/useWindowPosition";


const useStyles = makeStyles((theme)=>({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        }

    }
}));
export default function Services(){
    const classes=useStyles();
    const checked = useWindowPosition("header");
    return (
    <div className={classes.root} id="service-offert">
        <ImageCard service={services[0]} checked={checked}/>
        <ImageCard service={services[1]} checked={checked}/>
        <ImageCard service={services[1]} checked={checked}/>
        
    </div>
    );
    
}