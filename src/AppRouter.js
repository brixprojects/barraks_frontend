import React, { useEffect } from "react";
import { Route, Router } from "react-router-dom";

import {
    home,
    login,
    dashboard
} from './components/Links/Links.js';

import Login from "./components/Login";
import Home from './pages/Home.js'

function AppRouter() {


    return (
        <Router>
            <Route exact path={home} component={<Home/>}/>
            <Route exact path={login} component={<Login/>}/>
            {/* <Route exact path='/register' component={Register}/>
            <Route exact path='/forgot-password' component={ForgotPassword}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/home/dashboard' component={Dashboard}/> */}
        </Router>
    )
    

}

export default AppRouter;