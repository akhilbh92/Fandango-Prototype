import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonHeader from '../header/CommonHeader';
import LandingContent from './LandingContent';

class Landing extends Component {

    render() {
        return (
            <div className="container-body" id="outer-container">
                <CommonHeader />
                <LandingContent />
            </div>
        )
    }
}

export default withRouter(Landing);