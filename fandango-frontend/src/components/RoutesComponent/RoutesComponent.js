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
import AddScreenForm from '../Admin/AddScreenForm';
import AddUser from '../Admin/AddUser';
import UpdateUser from '../Admin/UpdateUser';
import RevenueByMovie from '../MovieHall/RevenueByMovie';
import SearchBill from '../MovieHall/SearchBill';
import Movie_detail_review from "../Moviedetail/moviedetail-review";
import Movie_detail_crew from "../Moviedetail/moviedetail-crew";
import TopTenMoviesByRevenue from "../AdminAnalytics/topTenMoviesByRevenue";
import MovieTickets from '../MovieTickets/MovieTickets';
import Movie_detail_addreview from "../Moviedetail/moviedetail-addreview";
import EnterTickets from './../Payments/EnterTickets';
import PaymentInfo from './../Payments/PaymentInfo';
import MovieHallAdminHome from '../MovieHall/MovieHallAdminHome';
import MovieSearchRevenue from '../AdminAnalytics/movieSearchRevenue';
import CityWiseMovieRevenue from '../AdminAnalytics/cityWiseMovieRevenue';
import TopTenHallByTicketsSold from '../AdminAnalytics/topTenHallByTicketsSold';
import PurchaseHistory from '../AfterLogin/PurchaseHistory';
import SearchResult from '../MoviesList/SearchResult'
import PrivateRoute from './PrivateRoute'
import ClicksPerPage from '../AdminAnalytics/clicksPerPage';
import MovieReviewGraph from '../AdminAnalytics/movieReviewGraph';

class RoutesComponent extends Component {

    constructor(props) {
        super(props);
        this.redirectURL = this.redirectURL.bind(this);
    }

    redirectURL = (url) => {
        debugger;
        this.props.history.push(url);

    };

    render() {
        return (
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" render={() => (
                    <div>

                        <Login redirectURL={this.redirectURL} />
                    </div>
                )} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/schedulemovie" component={ScheduleMovie} />
                <PrivateRoute exact path="/schedulemovie/:movieId" component={ScheduleMovieTimeOverview} />
                <PrivateRoute exact path="/home" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/preferences" component={AccountPreferences} />
                <Route exact path="/allmovies" render={() => (
                    <div>

                        <AllMovies redirectURL={this.redirectURL} />
                    </div>
                )} />
                <PrivateRoute exact path="/cancelbooking" component={CancelBooking} />
                <PrivateRoute exact path="/searchbill" component={SearchBill} />
                <Route exact path="/moviedetail" component={Movie_detail} />
                <Route exact path="/admin" component={AdminHome} />
                <Route exact path="/admin/movies/:movieId" component={EditMovieForm} />
                <Route exact path="/admin/halls/:hallId" component={EditHallForm} />
                <Route exact path ="/admin/addMovie" component={AddMovieForm} />
                <Route exact path ="/admin/addHall" component={AddHallForm} />
                <Route exact path ="/admin/addScreen" component={AddScreenForm} />
                <Route exact path ="/admin/addUser" component={AddUser} />
                <Route exact path ="/admin/updateUser" component={UpdateUser} />
                <PrivateRoute exact path ="/movierevenue" component={RevenueByMovie} />
                <Route exact path ="/moviedetailreview" component={Movie_detail_review} />
                <Route exact path ="/moviedetailcrew" component={Movie_detail_crew} />
                <Route exact path = "/toptenmovies" component={TopTenMoviesByRevenue}/>
                <Route exact path = "/movietickets" component={MovieTickets}/>
                <Route exact path ="/moviedetailaddreview" component={Movie_detail_addreview} />
                <Route exact path ="/entertickets" render={() => (
                    <div>

                        <EnterTickets redirectURL={this.redirectURL} />
                    </div>
                )} />
                <Route exact path ="/paymentinfo" component={PaymentInfo} />
                <Route exact path="/citywiserevenue" component={MovieSearchRevenue}/>
                <Route exact path="/citywiserevenue/:movieId" component={CityWiseMovieRevenue}/>
                <Route exact path="/toptenhalls" component={TopTenHallByTicketsSold}/>
                <PrivateRoute exact path="/test" component={Home}/>

                <PrivateRoute exact path="/mhadmin" component={MovieHallAdminHome} />
                <Route exact path="/purchasehistory" component={PurchaseHistory} />
                <Route exact path="/searchresult" render={() => (
                    <div>

                        <SearchResult redirectURL={this.redirectURL} />
                    </div>
                )} />
                <Route exact path="/clicksperpage" component={ClicksPerPage}/>
                <Route exact path="/moviereviewgraph" component={MovieReviewGraph}/>
            </div>
        );
    }
}

export default (withRouter)(RoutesComponent);
