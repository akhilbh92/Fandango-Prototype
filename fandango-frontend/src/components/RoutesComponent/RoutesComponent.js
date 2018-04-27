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
import EditHallForm from '../Admin/EditHallForm';
import EditMovieForm from '../Admin/EditMovieForm';
import AddMovieForm from '../Admin/AddMovieForm';
import AddHallForm from '../Admin/AddHallForm';
import RevenueByMovie from '../MovieHall/RevenueByMovie';
import SearchBill from '../MovieHall/SearchBill';
import Movie_detail_review from "../Moviedetail/moviedetail-review";
import TopTenMoviesByRevenue from "../AdminAnalytics/topTenMoviesByRevenue";
import MovieTickets from '../MovieTickets/MovieTickets';
import Movie_detail_addreview from "../Moviedetail/moviedetail-addreview";
import EnterTickets from './../Payments/EnterTickets';
import PaymentInfo from './../Payments/PaymentInfo';

import CityWiseMovieRevenue from '../AdminAnalytics/cityWiseMovieRevenue';
import TopTenHallByTicketsSold from '../AdminAnalytics/topTenHallByTicketsSold';


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
                <Route exact path="/searchbill" component={SearchBill} />
                <Route exact path ="/moviedetail" component={Movie_detail} />
                <Route exact path ="/admin" component={AdminHome} />
                <Route exact path="/admin/movies/:movieId" component={EditMovieForm} />
                <Route exact path="/admin/halls/:hallId" component={EditHallForm} />
                <Route exact path ="/admin/addMovie" component={AddMovieForm} />
                <Route exact path ="/admin/addHall" component={AddHallForm} />
                <Route exact path ="/movierevenue" component={RevenueByMovie} />
                <Route exact path ="/moviedetailreview" component={Movie_detail_review} />
                <Route exact path = "/toptenmovies" component={TopTenMoviesByRevenue}/>
                <Route exact path = "/movietickets" component={MovieTickets}/>
                <Route exact path ="/moviedetailaddreview" component={Movie_detail_addreview} />
                <Route exact path ="/entertickets" component={EnterTickets} />
                <Route exact path ="/paymentinfo" component={PaymentInfo} />
                <Route exact path="/citywiserevenue" component={CityWiseMovieRevenue}/>
                <Route exact path="/toptenhalls" component={TopTenHallByTicketsSold}/>
            </div>
        );
    }
}

export default (withRouter)(RoutesComponent);
