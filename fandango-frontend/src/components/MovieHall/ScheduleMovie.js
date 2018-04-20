import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import './moviehall.css';
import * as API from '../../api/API';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');

class ScheduleMovie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movieList: []
        };
    }

    componentDidMount() {
        API.getMovies()
            .then((resultData) => {
                if (!!resultData.data) {
                    this.setState({
                        movieList: resultData.data
                    });
                } else {
                    console.log("There are no movies in DB");
                }
            });
    }

    render() {
        
        const movieNode = this.state.movieList.map((movie, index) => {
            return (
                <li className="visual-item" key={index}>
                    <a className="visual-container">
                        <img className="visual-thumb img-size" alt="I Feel Pretty showtimes and tickets"
                            src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/204918/SuperTroopers2_OfficialPost.jpg" />
                    </a>
                    <div className="visual-detail">
                        <Link to={'/schedulemovie/' + movie.id}>
                            <button
                                className="btn-link visual-title dark"
                                type="button"
                            >{movie.movie_name}
                            </button>
                        </Link>
                        <span className="visual-sub-title">Releases {dateFormat(movie.release_date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
                    </div>
                </li>
            )
        });
        return (
            <div>
                <CommonHeader />
                <div className=" col-md-12 page-header-container">
                    <div className="col-md-offset-2 col-md-10 pd-left-0">
                        <h2 className="schedule-page-header">SCHEDULE UPCOMING <span className="page-header-emphasis">MOVIES</span></h2>
                    </div>
                </div>
                <div className="col-md-12 movie-ls-group pd-left-0">
                    <div className="col-md-offset-2 col-md-9 pd-left-0">
                        <ul className="visual-list movie-list pd-left-0">
                            {movieNode}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleMovie;