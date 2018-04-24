import React, { Component} from 'react';
import HomeHeader from './../AfterLogin/HomeHeader'
import './movies.css'
import avengers from './avengers.jpg'
//import {Link} from 'react-router-dom';

class AllMovies extends Component{

    render(){
        return(
            <div>
                <div class="site-wrap">
                    <HomeHeader/>

                    <div class="page-header-container">
                        <div class="row">
                            <div class="large-12 columns">
                                <h2 class="page-header">SHOWING ALL MOVIES</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 list-header">
                        <h3 class="list-font">MOVIES</h3>
                    </div>

                    <div class="col-md-offset-2 col-md-8 list-moviedetails">
                        <div class="img-style">
                            <img src={avengers} class="img-peculiar"  />
                        </div>
                        <div class="movie-heading">
                            <h4> AVENGERS: INFINITY WAR MARATHON</h4>
                        </div>
                        <div class="movie-extra-details">
                            <h5 class="gap">Friday, April 27, 2018</h5>
                            <h5 class="gap">PG13 | 2hr 29min</h5>
                            <h5 calss="gap">Action/Adventure, SCi-fi Movie</h5>
                        </div>
                        <div class="cast">
                        <h5>
                            Cast + Crew: Karen Gillan, Scarlett Johansson, Chris Pratt, Zoe Saldana, Dave Bautista
                        </h5>
                        </div>
                        <div class="see-it-in">
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
