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
import Movie_detail from '../Moviedetail/movidetail';
import AdminHome from '../Admin/AdminHome';
import AdminHallForm from '../Admin/HallForm';
import AdminMovieForm from '../Admin/MovieForm';
import AddMovieForm from '../Admin/form';


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
                <Route exact path ="/moviedetail" component={Movie_detail} />
                <Route exact path ="/admin" component={AdminHome} />
                <Route exact path="/admin/movies/:movieId" component={AdminMovieForm} />
                <Route exact path="/admin/halls/:hallId" component={AdminHallForm} />
                <Route exact path="/form" component={AddMovieForm} />
            </div>
        )
    }
}

export default (withRouter)(RoutesComponent);
