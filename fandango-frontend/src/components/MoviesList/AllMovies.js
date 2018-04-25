import React, { Component} from 'react';
import HomeHeader from './../AfterLogin/HomeHeader'
import './movies.css'
import avengers from './avengers.jpg'
//import {Link} from 'react-router-dom';

class AllMovies extends Component{

    render(){
        return(
            <div>
                <div className="site-wrap">
                    <HomeHeader/>

                    <div className="page-header-container">
                        <div className="row">
                            <div className="large-12 columns">
                                <h2 className="page-header">SHOWING ALL MOVIES</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 list-header">
                        <h3 className="list-font">MOVIES</h3>
                    </div>

                    <div className="col-md-offset-2 col-md-8 list-moviedetails">
                        <div className="img-style">
                            <img src={avengers} className="img-peculiar"  />
                        </div>
                        <div className="movie-heading">
                            <h4> AVENGERS: INFINITY WAR MARATHON</h4>
                        </div>
                        <div className="movie-extra-details">
                            <h5 className="gap">Friday, April 27, 2018</h5>
                            <h5 className="gap">PG13 | 2hr 29min</h5>
                            <h5 calss="gap">Action/Adventure, SCi-fi Movie</h5>
                        </div>
                        <div className="cast">
                        <h5>
                            Cast + Crew: Karen Gillan, Scarlett Johansson, Chris Pratt, Zoe Saldana, Dave Bautista
                        </h5>
                        </div>
                        <div className="see-it-in">
                            <h5>
                                See It in: Digital 3D, IMAX, IMAX 3D
                            </h5>
                        </div>
                        <div className="book-now">
                                <button type="button" className="btn buy-tickets"> BUY TICKETS</button>
                        </div>
                    </div>


                </div>



            </div>
        )
    }
}

export default AllMovies;
