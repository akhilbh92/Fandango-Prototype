import React, { Component} from 'react';
import './MovieTickets.css'
import HomeHeader from './../AfterLogin/HomeHeader'

class Movie_Tickets extends Component{

    componentWillMount() {
        document.body.style.backgroundColor = "#EBEBEB"
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
    }


    render(){
        return (
            <div>
                <HomeHeader/>
                {/*<div className="tickets-page">*/}





                <div id="TICKETS_SECTION_1">
                    <div id="TICKETS_DIV_2">
                        <div id="TICKETS_DIV_3">
                            <h1 id="H1_4">
                                Rampage (2018) <span id="SPAN_5">times<span id="SPAN_6"></span></span>

                            </h1>
                            <ul id="UL_8">
                                <li id="LI_9">
                                    <a href="/rampage-2018-207628/movie-overview" id="A_10">Overview</a>
                                </li>
                                <li id="LI_11">
                                    <a href="/rampage-2018-207628/movie-times" id="A_12">Movie Times + Tickets</a>
                                </li>
                                <li id="LI_15">
                                    <a href="/rampage-2018-207628/movie-reviews" id="A_16">Movie Reviews</a>
                                </li>
                                {/*<li id="LI_17">*/}
                                    {/*<a href="https://www.fandango.com/movie-trailer/rampage2018-trailer/207628" id="A_18">Trailers</a>*/}
                                {/*</li>*/}
                                {/*<li id="LI_19">*/}
                                    {/*<a href="#" id="A_20">More</a>*/}
                                    {/*<ul id="UL_21">*/}
                                        {/*<li id="LI_22">*/}
                                            {/*<a href="https://www.fandango.com/rampage2018_207628/moviephotosposters" id="A_23">Photos + Posters</a>*/}
                                        {/*</li>*/}
                                        {/*<li id="LI_24">*/}
                                            {/*<a href="/rampage-2018-207628/cast-and-crew" id="A_25">Cast + Crew</a>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="tickets-area-main">
                    <div className="tickets-area-main-div">
                        <div id="datepickerDIV_1">
                            <section id="datepickerSECTION_2">
                                <ul id="datepickerUL_3">
                                    <li id="datepickerLI_4">
                                        <a href="?date=2018-04-26" id="datepickerA_5"> <span id="datepickerSPAN_6">Today</span> <span id="datepickerSPAN_7">Apr</span> <span id="datepickerSPAN_8">26</span></a>
                                    </li>
                                    <li id="datepickerLI_9">
                                        <a href="?date=2018-04-27" id="datepickerA_10"> <span id="datepickerSPAN_11">Fri</span> <span id="datepickerSPAN_12">Apr</span> <span id="datepickerSPAN_13">27</span></a>
                                    </li>
                                    <li id="datepickerLI_14">
                                        <a href="?date=2018-04-28" id="datepickerA_15"> <span id="datepickerSPAN_16">Sat</span> <span id="datepickerSPAN_17">Apr</span> <span id="datepickerSPAN_18">28</span></a>
                                    </li>
                                    <li id="datepickerLI_19">
                                        <a href="?date=2018-04-29" id="datepickerA_20"> <span id="datepickerSPAN_21">Sun</span> <span id="datepickerSPAN_22">Apr</span> <span id="datepickerSPAN_23">29</span></a>
                                    </li>
                                    <li id="datepickerLI_24">
                                        <a href="?date=2018-04-30" id="datepickerA_25"> <span id="datepickerSPAN_26">Mon</span> <span id="datepickerSPAN_27">Apr</span> <span id="datepickerSPAN_28">30</span></a>
                                    </li>
                                    <li id="datepickerLI_29">
                                        <a href="?date=2018-05-01" id="datepickerA_30"> <span id="datepickerSPAN_31">Tue</span> <span id="datepickerSPAN_32">May</span> <span id="datepickerSPAN_33">01</span></a>
                                    </li>
                                    <li id="datepickerLI_34">
                                        <a href="?date=2018-05-02" id="datepickerA_35"> <span id="datepickerSPAN_36">Wed</span> <span id="datepickerSPAN_37">May</span> <span id="datepickerSPAN_38">02</span></a>
                                    </li>
                                    <li id="datepickerLI_39">
                                        <a href="?date=2018-05-03" id="datepickerA_40"> <span id="datepickerSPAN_41">Thu</span> <span id="datepickerSPAN_42">May</span> <span id="datepickerSPAN_43">03</span></a>
                                    </li>
                                </ul>
                                <button id="datepickerBUTTON_44">
                                    Previous
                                </button>
                                <button id="datepickerBUTTON_45">
                                    Next
                                </button>
                            </section>
                        </div>
                    </div>
                </div>






                </div>
            // </div>
        )
    }
}

export default Movie_Tickets;