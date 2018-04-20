import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import './moviehall.css';

class ScheduleMovieTimeOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <CommonHeader />
                <div className=" col-md-12 page-header-container">
                    <div className="col-md-offset-2 col-md-10 pd-left-0">
                        <h2 className="schedule-page-header">MOVIES <span className="page-header-emphasis">UPCOMING</span></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleMovieTimeOverview;