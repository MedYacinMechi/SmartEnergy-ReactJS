import React, { useEffect, useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { Link as Scroll } from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    }
})
const useStyles = makeStyles((theme)=>({
    root : {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

    },
    appbar: {
        //background: 'none',
        
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
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#ec8c04',
        fontSize: '4rem',
    }
   
}));
export default function Header(){
    const history = useHistory()
    const [checked, setChecked]=useState(false);
    const [isMousedOver, setMouseOver]=useState(false);
    useEffect (()=>{
        setChecked(true);

    }, [])
    const classes=useStyles();

    function handleClick() {
        console.log('clicked');
        history.push("/login");
    }

    function handleMouseOver () {
        setMouseOver(true);
    }
    function handleMouseOut () {
        setMouseOver(false);
    }
    return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0} style={{backgroundColor: "transparent"}}>
         <Toolbar className={classes.appbarWrapper}>
            <img src={`${process.env.PUBLIC_URL}/images/logo-sofia-tech.png`}  alt="logo" width="250" height="50"></img>
            <h1 className={classes.appbarTitle}></h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse in={checked} {... (checked ? {timeout : 1000} : {})} collapsedheight={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>Smart Energy  <br /> Monitoring System </h1>
            <div className={classes.container}>
            <ThemeProvider theme={theme}>   
            <Button color="primary" size="large" variant="outlined" endIcon={<SendIcon />} onClick={handleClick}
            style={{  backgroundColor: isMousedOver ? '#043c74' :  '#ec8c04' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} 
            >
                  Get Started 
            </Button>
            </ThemeProvider>
            </div>
            <Scroll to="service-offert" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    </div>
    );
    
}