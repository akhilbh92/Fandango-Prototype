import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from "../Landing/Landing";
import ScheduleMovie from "../MovieHall/ScheduleMovie";
import ScheduleMovieTimeOverview from "../MovieHall/ScheduleMovieTime";

class RoutesComponent extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/schedulemovie" component={ScheduleMovie} />
                <Route exact path="/schedulemovie/:movieId" component={ScheduleMovieTimeOverview} />
            </div>
        )


    }
}

export default (withRouter)(RoutesComponent);