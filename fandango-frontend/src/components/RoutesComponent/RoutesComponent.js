import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from "../Landing/Landing";
import ScheduleMovie from "../MovieHall/ScheduleMovie";
import ScheduleMovieTimeOverview from "../MovieHall/ScheduleMovieTime";
import Login from '../login/Login';
import Signup from '../login/Signup'

class RoutesComponent extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/schedulemovie" component={ScheduleMovie} />
                <Route exact path="/schedulemovie/:movieId" component={ScheduleMovieTimeOverview} />
            </div>
        )


    }
}

export default (withRouter)(RoutesComponent);
