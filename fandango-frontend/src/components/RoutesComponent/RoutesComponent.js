import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from "../Landing/Landing";

class RoutesComponent extends Component{

    render(){
        return(
            <Route exact path = "/" component={Landing}/>
        )


    }
}

export default (withRouter)(RoutesComponent);