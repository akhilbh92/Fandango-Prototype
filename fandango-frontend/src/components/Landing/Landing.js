import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonHeader from '../header/CommonHeader';
import LandingContent from './LandingContent';
import ContentHeader from './ContentHeader';

class Landing extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <div className="container-body" id="outer-container">
                <CommonHeader />
                <ContentHeader />
                <LandingContent />
            </div>
        )
    }
}

export default withRouter(Landing);