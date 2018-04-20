import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from "../Landing/Landing";
import Login from '../login/Login';
import Signup from '../login/Signup'

class RoutesComponent extends Component{

    render(){
        return(
            <div>
                <Route exact path = "/" component={Landing}/>
                <Route exact path =  "/login" component={Login}/>
                <Route exact path =  "/signup" component={Signup}/>
            </div>
        )


    }
}

export default (withRouter)(RoutesComponent);