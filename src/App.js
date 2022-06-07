
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";
import { LoginRegister } from "LoginRegister";
import AdminLayout from "layouts/Admin.js";
import {useSelector} from 'react-redux';
import Landing from "LandingPage";
import LoginPage from "LoginPage";
import DeviceList from "views/DevicesList";




function App () {
    const auth = useSelector((state) => state.user.isAuthenticated)
    console.log(auth)
   
    return (
    <div>
        <BrowserRouter>
          <Switch>

            <Redirect exact from="/" to="/landing" />
            <Route path="/landing"><Landing/></Route>
            <Route path="/admin" render={(props) => 
            auth ? (<AdminLayout {...props} />) : (<Redirect to="/landing"/>)

            } />
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/auth"><LoginRegister /></Route>
            {/* <Route exact path="/devices"><DeviceList /></Route> */}
            <Route exact path="/devices/:id"><LoginRegister /></Route>
            {/* we gonna impelemnt a nested route the main route for devicesList inside it route of single device  */}
            {/* <Route path="/device/:deviceId" ><DeviceDetail/></Route> */}
          </Switch>
       </BrowserRouter>
        
    </div>   
    );
}
export default App;