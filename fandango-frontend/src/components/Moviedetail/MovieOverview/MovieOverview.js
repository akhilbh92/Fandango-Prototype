import React, { Component} from 'react';
import './MovieOverview.css';
import Rating from 'react-rating';
import stargrey from './star-grey.png'
import staryellow from './staryellow.png'

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



                <section id="SECTION_1">
                    <div id="DIV_2">
                        <div id="DIV_3">
                            <div id="DIV_4">
                            </div>
                        </div>
                        <div id="DIV_5">
                            <div id="DIV_6">
                                <div id="DIV_7">
                                    <a id="A_8"><span id="SPAN_9"></span> Share</a>
                                    <div id="DIV_10">
                                        <ul id="UL_11">
                                            <li id="LI_12">
                                                <a href="//www.facebook.com/sharer/sharer.php?u=" id="A_13">Share on Facebook</a>
                                            </li>
                                            <li id="LI_14">
                                                <a href="//twitter.com/share?url=" id="A_15">Share on Twitter</a>
                                            </li>
                                            <li id="LI_16">
                                                <a href="//plus.google.com/share?url=" id="A_17">Share on Google+</a>
                                            </li>
                                            <li id="LI_18">
                                                <a href="//www.tumblr.com/widgets/share/tool?canonicalUrl=" id="A_19">Share on Tumblr</a>
                                            </li>
                                            <li id="LI_20">
                                                <a href="//www.pinterest.com/pin/create/button/?url=" id="A_21">Share on Pinterest</a>
                                            </li>
                                            <li id="LI_22">
                                                <a href="mailto:?subject=" id="A_23">Share by Email</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h2 id="H2_24">
                                Rampage: Trailer 2
                            </h2>
                            <div id="DIV_25">
                            </div>
                        </div>


                        <section id="SECTION_26">
                            <span id="SPAN_27"></span><span id="SPAN_28"></span>
                            <div id="DIV_29">
                                1 of 4
                            </div>
                            <div id="DIV_30">
                                <ul id="UL_31">
                                    <li id="LI_32">
                                        <a href="/movie-trailer/rampage-trailer-2-trailer/207628?mpxId=1160649795828&amp;autoplay=true" id="A_33"> <span id="SPAN_34"> <span id="SPAN_35">Rampage: Trailer 2</span></span></a>
                                        <div id="DIV_36">
                                        </div>
                                        <div id="DIV_37">
                                        </div>
                                    </li>
                                    <li id="LI_38">
                                        <a href="/movie-trailer/rampage-trailer-1-trailer/207628?mpxId=1097614915667&amp;autoplay=true" id="A_39"> <span id="SPAN_40"> <span id="SPAN_41">Rampage: Trailer 1</span></span></a>
                                        <div id="DIV_42">
                                        </div>
                                        <div id="DIV_43">
                                        </div>
                                    </li>
                                    <li id="LI_44">
                                        <a href="/movie-trailer/weekend-ticket-rampage-truth-or-dare-sgt-stubby-an-american-hero-trailer/207628?mpxId=1209272899634&amp;autoplay=true" id="A_45"> <span id="SPAN_46"> <span id="SPAN_47">Weekend Ticket: Rampage, Truth or Dare, Sgt. Stubby: An American Hero</span></span></a>
                                        <div id="DIV_48">
                                        </div>
                                        <div id="DIV_49">
                                            Which movie is right for you this weekend? Rampage? Truth or Dare? Sgt. Stubby: An American Hero?
                                        </div>
                                    </li>
                                    <li id="LI_50">
                                        <a href="/movie-trailer/rampage-versus-with-cast-and-director-trailer/207628?mpxId=1208711747997&amp;autoplay=true" id="A_51"> <span id="SPAN_52"> <span id="SPAN_53">Rampage: Versus with Cast and Director</span></span></a>
                                        <div id="DIV_54">
                                        </div>
                                        <div id="DIV_55">
                                            Who would win in a wrestling match between Happy George and Dwayne Johnson? The cast and director of 'Rampage' answer this and other versus questions.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>




            </div>
        );
    }
}

export default MovieOverview;