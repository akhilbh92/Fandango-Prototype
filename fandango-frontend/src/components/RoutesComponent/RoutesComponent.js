import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from "../Landing/Landing";
import ScheduleMovie from "../MovieHall/ScheduleMovie";
import ScheduleMovieTimeOverview from "../MovieHall/ScheduleMovieTime";
import Login from '../login/Login';
import Signup from '../login/Signup';
import Home from '../AfterLogin/Home';
import Dashboard from '../AfterLogin/Dashboard';
import AccountPreferences from "../AfterLogin/AccountPreferences";
import AllMovies from "../MoviesList/AllMovies";
import CancelBooking from "../MovieHall/CancelBooking";

class RoutesComponent extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/schedulemovie" component={ScheduleMovie} />
                <Route exact path="/schedulemovie/:movieId" component={ScheduleMovieTimeOverview} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/preferences" component={AccountPreferences} />
                <Route exact path="/allmovies" component={AllMovies} />
                <Route exact path="/cancelbooking" component={CancelBooking} />
            </div>
        )
    }
}

export default (withRouter)(RoutesComponent);
