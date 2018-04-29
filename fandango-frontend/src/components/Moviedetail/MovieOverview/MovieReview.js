import React, { Component} from 'react';
import './MovieOverview.css';
import Rating from 'react-rating';
import {Link} from 'react-router-dom';
import stargrey from './star-grey.png';
import staryellow from './staryellow.png';
import {connect} from "react-redux";
import * as API from './../../../api/apicall_for_users';
import {selectedReview} from "../../../actions";
import {bindActionCreators} from "redux";

class MovieReview extends Component {

    constructor(props){
        super(props);

        this.state={
            movie_id: this.props.movie.id.toString(),
            reviews: [],
            ratings: ''
        }
    }

    componentDidMount(){
        API.getRatings(this.state)
            .then((result) => {
                this.setState({
                    ratings: result.data.aggregates,
                    reviews: result.data.ratings,
                });

            })
    }

    updateReview = () => {
        window.location = "/moviedetailupdatereview";
    }


    renderLink(){
        var display = "yes";
        this.state.reviews.map((review) => {
            if(review.userId == this.props.user.userId){
                display="no";
            }
        })

        if(display == "no"){
            return (<div></div>)
        }
        else{
            return(
                <div className="submit-review">
                    <Link to="/moviedetailaddreview">TELL US WHAT YOU THINK!!</Link>
                </div>
            )
        }
    }


    renderReviews(){
         return this.state.reviews.map((review) => {
             if(review.userId != this.props.user.userId) {
                 return (
                     <div className="review-tab">
                         <div className="star-review-pos">
                             <Rating
                                 placeholderRating={review.rating}
                                 emptySymbol={<img src={stargrey} className="icon"/>}
                                 placeholderSymbol={<img src={staryellow} className="icon"/>}
                                 fullSymbol={<img src={staryellow} className="icon"/>}
                             />

                         </div>
                         <div className="review-spacing">
                             <h4>{review.review_title}</h4>
                         </div>
                         <div className="reviewer-name">
                             <h5>Review By: {review.first_name}</h5>
                         </div>
                         <div className="review-body">
                             <h6>{review.review_body}
                             </h6>
                         </div>
                     </div>
                 )
             }
             else{
                 return (
                     <div className="review-tab">
                         <div className="star-review-pos">
                             <Rating
                                 placeholderRating={review.rating}
                                 emptySymbol={<img src={stargrey} className="icon"/>}
                                 placeholderSymbol={<img src={staryellow} className="icon"/>}
                                 fullSymbol={<img src={staryellow} className="icon"/>}
                             />

                         </div>
                         <div className="review-spacing">
                             <h4>{review.review_title}</h4>
                         </div>
                         <div className="reviewer-name">
                             <h5>Review By: {review.first_name}</h5>
                         </div>
                         <div className="review-body">
                             <h6>{review.review_body}
                             </h6>
                         </div>
                         <div style={{}}>
                             <button type="button" className="btn" style={{ marginTop: "120px", marginLeft: '80%', backgroundColor: '#f15500' }} onClick={() => this.updateReview(this.props.selectedReview(review))}>EDIT</button>
                         </div>
                     </div>
                 )
             }

        })
    }




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

                <div className="view-review-box  col-md-5">
                    <div className="review-box-header">
                        <h3 className="review-header-font">FANS SAY</h3>
                        <div className="star-pos">
                            <Rating
                                placeholderRating={this.state.ratings.avgrating}
                                emptySymbol={<img src={stargrey} className="icon" />}
                                placeholderSymbol={<img src={staryellow} className="icon" />}
                                fullSymbol={<img src={staryellow} className="icon" />}
                            />
                        </div>
                        <h6 className="fans-rating"> {this.state.ratings.totalrating} Fan Ratings</h6>

                    </div>

                    {this.renderLink()}
                    {this.renderReviews()}


                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser,
        movie: state.selectedMovie,
        review: state.selectedReview
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedReview: selectedReview}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(MovieReview);