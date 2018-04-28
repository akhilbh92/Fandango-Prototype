import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonHeader from '../header/CommonHeader';
import LandingContent from './LandingContent';
import ContentHeader from './ContentHeader';
import log4javascript from 'log4javascript';


class Landing extends Component {

    componentDidMount(){
       /* window.myLogger = log4javascript.getLogger();
        var ajaxAppender = new log4javascript.AjaxAppender('http://localhost:3001/api/logger');
        ajaxAppender.setBatchSize(10); // send in batches of 10
        ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
        window.myLogger.addAppender(ajaxAppender);
        window.myLogger.info('{"event":"page_click","page_name":"HomePage","count":"1"}');*/
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