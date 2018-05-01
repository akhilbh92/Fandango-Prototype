import React, { Component } from 'react';

import HomeHeader from './HomeHeader';
import LandingContent from '../Landing/LandingContent';
import {log1} from "../../App";

class Home extends Component {

    constructor(props){
        super(props);
        this.handleLogs = this.handleLogs.bind(this);

    }

    handleLogs() {
        log1.info('{"event":"page_click","page_name":"Home","count":"1"}');
    }

    render() {
        return (
            <div className="container-body" id="outer-container" onClick={this.handleLogs}>
                <HomeHeader />
                <LandingContent />
            </div>
        )
    }
}

export default (Home);