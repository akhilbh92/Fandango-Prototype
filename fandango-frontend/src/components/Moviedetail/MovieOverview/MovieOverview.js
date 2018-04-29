import React, { Component} from 'react';
import './MovieOverview.css';
import Rating from 'react-rating';
import stargrey from './star-grey.png'
import staryellow from './staryellow.png'
import {connect} from "react-redux";
import * as API from "../../../api/apicall_for_users";
import YouTube from 'react-youtube';


class MovieOverview extends Component {

    constructor(props){
        super(props);
        this.state={
            avgrating: 0,
            totalrating: 0
        }
    }

    componentDidMount(){
        API.getRatings(this.state)
            .then((result) => {
                this.setState({
                    "avgrating":result.data.aggregates.avgrating,
                    "totalrating":result.data.aggregates.totalrating,
                });
            })
    }

    render(){
        if(!this.props.movie.see_it_in)this.props.movie.see_it_in = "35MM";
        return(

            <div className="movie-overview-layout">
                <div className="movie-overview-layout-left">
                    <section className="movie-overview-layout-left-section1">
                        <a className="movie-overview-layout-left-section1-poster" href="/">
                            <img className="movie-overview-layout-left-section1-poster-image"
                                 src={this.props.movie.photos}
                                 alt={this.props.movie.movie_name +" Movie Poster"}/>
                        </a>
                        <ul className="movie-overview-layout-left-section1-detail">
                            <li>Released</li>
                            <li className="movie-overview-layout-left-section1-detail-release-date">{this.props.movie.release_date}</li>
                            <li>


                                PG-13,



                                {this.props.movie.movie_length} min

                            </li>
                            <li>{this.props.movie.genres}</li>
                            {/*<li>Sci-Fi/Fantasy</li>*/}
                            <li className="movie-overview-layout-left-section1-detail-rating">
                                {/*<div className="movie-overview-layout-left-section1-detail-rating-inner" data-star-rating="5">*/}

                                    {/*<a className="movie-overview-layout-left-section1-detail-rating-inner-star"*/}
                                       {/*data-action="rate" data-id="202991" data-isnew="true" data-rate-movie="true"*/}
                                       {/*data-show-caption="true" data-value="5" title="Loved It">*/}
                                    {/*</a>*/}

                                    {/*<a className="movie-overview-layout-left-section1-detail-rating-inner-star"*/}
                                       {/*data-action="rate" data-id="202991" data-isnew="true" data-rate-movie="true"*/}
                                       {/*data-show-caption="true" data-value="4" title="Really Liked It">*/}
                                    {/*</a>*/}

                                    {/*<a className="movie-overview-layout-left-section1-detail-rating-inner-star"*/}
                                       {/*data-action="rate" data-id="202991" data-isnew="true" data-rate-movie="true"*/}
                                       {/*data-show-caption="true" data-value="3" title="Liked It">*/}
                                    {/*</a>*/}

                                    {/*<a className="movie-overview-layout-left-section1-detail-rating-inner-star"*/}
                                       {/*data-action="rate" data-id="202991" data-isnew="true" data-rate-movie="true"*/}
                                       {/*data-show-caption="true" data-value="2" title="Disliked It">*/}
                                    {/*</a>*/}

                                    {/*<a className="movie-overview-layout-left-section1-detail-rating-inner-star"*/}
                                       {/*data-action="rate" data-id="202991" data-isnew="true" data-rate-movie="true"*/}
                                       {/*data-show-caption="true" data-value="1" title="Hated It">*/}
                                    {/*</a>*/}

                                {/*</div>*/}
                                <Rating
                                    placeholderRating={this.state.avgrating}
                                    emptySymbol={<img src={stargrey} className="icon" />}
                                    placeholderSymbol={<img src={staryellow} className="icon" />}
                                    fullSymbol={<img src={staryellow} className="icon" />}
                                    readonly={true}
                                />
                            </li>
                            <li className="movie-overview-layout-left-section1-detail-rating-number">{this.state.totalrating} Fan Ratings</li>
                        </ul>
                        <ul className="movie-overview-layout-left-section1-detail-seeitin">
                            <h3 className="movie-overview-layout-left-section1-detail-seeitin-header">SEE IT IN</h3>
                            <li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span
                                className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">{this.props.movie.see_it_in}</span></li>
                            {/*<li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span*/}
                                {/*className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">DIGITAL 3D</span></li>*/}
                            {/*<li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span*/}
                                {/*className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">IMAX</span></li>*/}
                            {/*<li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span*/}
                                {/*className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">IMAX 3D</span></li>*/}
                        </ul>
                    </section>
                </div>

                <section id="SECTION_1">
                    <div id="DIV_2">
                        <div id="DIV_3">
                            <div id="DIV_4">
                                <YouTube
                                    videoId={this.props.movie.trailer}
                                    autoplay={true}
                                    opts={{"height": '135%',"width": '130%'}}
                                />
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.selectedMovie
    }
}


export default connect(mapStateToProps)(MovieOverview);