import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import { withRouter } from 'react-router-dom';
import SubHeader from './SubHeader';
import LandingContent from '../Landing/LandingContent';
import './admin.css'


class MovieHallAdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <div className="container-body" id="outer-container">
                <CommonHeader />
                <SubHeader />
                <LandingContent />
            </div>
        )
    }
}

export default withRouter(MovieHallAdminHome);


