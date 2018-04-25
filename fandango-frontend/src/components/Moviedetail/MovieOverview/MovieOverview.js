import React, { Component} from 'react';
import './MovieOverview.css';
import Rating from 'react-rating';
import stargrey from './star-grey.png'
import staryellow from './star-yellow.png'

class MovieOverview extends Component {
    render(){
        return(
            <div className="movie-overview-layout">
                <div className="movie-overview-layout-left">
                    <section className="movie-overview-layout-left-section1">
                        <a className="movie-overview-layout-left-section1-poster" href="/">
                            <img className="movie-overview-layout-left-section1-poster-image"
                                 src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/202991/fan_postertwo_blackpanther_.jpg"
                                 alt="Black Panther Movie Poster"/>
                        </a>
                        <ul className="movie-overview-layout-left-section1-detail">
                            <li>Released</li>
                            <li className="movie-overview-layout-left-section1-detail-release-date">February 16, 2018</li>
                            <li>


                                PG-13,



                                2 hr 14 min

                            </li>
                            <li>Action/Adventure</li>
                            <li>Sci-Fi/Fantasy</li>
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
                                    placeholderRating={3.5}
                                    emptySymbol={<img src={stargrey} className="icon" />}
                                    placeholderSymbol={<img src={staryellow} className="icon" />}
                                    fullSymbol={<img src={staryellow} className="icon" />}
                                />
                            </li>
                            <li className="movie-overview-layout-left-section1-detail-rating-number">62,607 Fan Ratings</li>
                        </ul>
                        <ul className="movie-overview-layout-left-section1-detail-seeitin">
                            <h3 className="movie-overview-layout-left-section1-detail-seeitin-header">SEE IT IN</h3>
                            <li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span
                                className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">35MM</span></li>
                            <li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span
                                className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">DIGITAL 3D</span></li>
                            <li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span
                                className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">IMAX</span></li>
                            <li className="movie-overview-layout-left-section1-detail-seeitin-header-format"><span
                                className="movie-overview-layout-left-section1-detail-seeitin-header-format-span">IMAX 3D</span></li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default MovieOverview;