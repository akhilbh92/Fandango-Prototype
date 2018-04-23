import React, { Component } from 'react';

import HomeHeader from './HomeHeader';
import LandingContent from '../Landing/LandingContent';

class Home extends Component {

    render() {
        return (
            <div className="container-body" id="outer-container">
                <HomeHeader />
                <LandingContent />
            </div>
        )
    }
}

export default (Home);