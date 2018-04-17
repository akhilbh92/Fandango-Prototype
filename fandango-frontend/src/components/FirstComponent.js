import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class FirstComponent extends Component{

    render(){
        return(
            <div>
                Welcome To Fandango.com
            </div>
        )
    }
}

export default withRouter(FirstComponent);