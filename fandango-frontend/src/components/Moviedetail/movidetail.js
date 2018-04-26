import React, { Component} from 'react';
import HomeHeader from './../AfterLogin/HomeHeader'
import './moviedetail.css'
import MoveOverview from './MovieOverview/MovieOverview'
import MovieCrew from './MovieCrew/MovieCrew'


class Movie_detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ActiveComponent: <MoveOverview/>
        }
    }

    render(){


        return(
            <div>
                <HomeHeader/>
                <div className="movie-detail-main">
                    <div className="movie-detail-mop">
                        <div className="movie-detail-background">
                            <svg width="100%" height="100%">
                                <defs>
                                    <filter id="backgroundBlur" width="150%" height="150%" x="-25%" y="-25%"
                                            color-interpolation-filters="sRGB">
                                        <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                                        <feColorMatrix type="matrix"
                                                       values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0 0 0 0 10 0"></feColorMatrix>
                                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                    </filter>
                                </defs>
                                <image className="js-backgroundBlur-image" x="0" y="0" width="100%" height="110%"
                                       xlinkHref="//images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/207628/fmc_mc_Rampage.jpg"
                                       preserveAspectRatio="xMidYMid slice" filter="url(#backgroundBlur)"></image>
                            </svg>
                        </div>
                        <div className="movie-detail-background-next">
                            <section className="movie-detail-subnav">
                                <div className="movie-detail-section-row">
                                    <div className="movie-detail-section-row-100">
                                        <h1 className="movie-detail-section-row-title">



                                            Rampage (2018)





                                        </h1>
                                        <ul className="movie-detail-section-subnav">
                                            <li className="movie-detail-section-subnav-item">
                                                <label className="movie-detail-section-subnav-item-link" onClick={()=>this.setState({...this.state,ActiveComponent:<MoveOverview/>})}>
                                                    Overview
                                                </label>
                                            </li>
                                            <li className="movie-detail-section-subnav-item">
                                                <label className="movie-detail-section-subnav-item-link">
                                                    Movie Times + tickets
                                                </label>
                                            </li>
                                            <li className="movie-detail-section-subnav-item">
                                                <a className="movie-detail-section-subnav-item-link">
                                                    REVIEWS
                                                </a>
                                            </li>
                                            <li className="movie-detail-section-subnav-item">
                                                <a className="movie-detail-section-subnav-item-link">
                                                    CAST
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            {this.state.ActiveComponent}
                        </div>
                            <MovieCrew/>
                    </div>

                </div>

            </div>);
    };
}

export default Movie_detail;