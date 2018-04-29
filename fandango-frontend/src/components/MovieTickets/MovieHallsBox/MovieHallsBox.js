import React, { Component } from 'react';
import { loginUser } from "../../../actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './MovieHallsBox.css'

class Movie_Halls extends Component{

    render(){
        return <div>
            <div id="movehallsDIV_1">
                <div id="movehallsDIV_2">
                    <div id="movehallsDIV_3">
                        <span id="movehallsSPAN_4">Mobile Tickets</span>
                    </div>
                    <div id="movehallsDIV_5">
                        <h3 id="movehallsH3_6">
                            <a href="/cinelux-almaden-cafe-and-lounge-AAFQQ/theater-page" id="movehallsA_7">CineLux Almaden Cafe &amp; Lounge</a>
                            <button id="movehallsBUTTON_8">
                            </button>
                        </h3>
                    </div>
                    <div id="movehallsDIV_9">
                        <span id="movehallsSPAN_10">2306 Almaden Road,</span> <span id="movehallsSPAN_11">San Jose, CA 95125</span>
                    </div>
                    {/*<div id="movehallsDIV_12">*/}
                        {/*<a href="//www.fandango.com/maps/DrivingDirections.aspx?tid=AAFQQ" rel="nofollow" id="movehallsA_13">MAP</a><a href="#"></a>*/}
                        {/*<li>*/}
                            {/*Stadium Seating*/}
                        {/*</li>Digital ProjectionListening DevicesMobile TicketsParty RoomReserved SeatingWheelchair Accessible" id="movehallsA_14">AMENITIES*/}
                    {/*</div>*/}
                </div>
                <ul id="movehallsUL_15">
                    <li id="movehallsLI_16">
                        <h4 id="movehallsH3_17">
                            <span id="movehallsSPAN_18"></span> Select a movie time to buy Standard Showtimes
                        </h4>
                        {/*<ul id="movehallsUL_19">*/}
                            {/*<li id="movehallsLI_20">*/}
                                {/*<a href="#" id="movehallsA_21">Accessibility devices available</a>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_22">*/}
                                {/*<a href="#" id="movehallsA_23">Reserved seating</a>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_24">*/}
                                {/*<a href="#" id="movehallsA_25">No passes</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        <ol id="movehallsOL_26">
                            <li id="movehallsLI_27">
                                <span id="movehallsSPAN_28">10:15a</span>
                            </li>
                            <li id="movehallsLI_29">
                                <span id="movehallsSPAN_30">11:30a</span>
                            </li>
                            <li id="movehallsLI_31">
                                <span id="movehallsSPAN_32">12:45p</span>
                            </li>
                            <li id="movehallsLI_33">
                                <span id="movehallsSPAN_34">1:45p</span>
                            </li>
                            <li id="movehallsLI_35">
                                <span id="movehallsSPAN_36">1:45p</span>
                            </li>
                            <li id="movehallsLI_37">
                                <span id="movehallsSPAN_38">3:15p</span>
                            </li>
                            <li id="movehallsLI_39">
                                <span id="movehallsSPAN_40">4:30p</span>
                            </li>
                            <li id="movehallsLI_41">
                                <a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=217594030&amp;tid=AAFQQ&amp;sdate=2018-04-27+19:00&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_42">7:00p</a>
                            </li>
                            <li id="movehallsLI_43">
                                <a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=222359554&amp;tid=AAFQQ&amp;sdate=2018-04-27+20:15&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_44">8:15p</a>
                            </li>
                            <li id="movehallsLI_45">
                                <a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=222359555&amp;tid=AAFQQ&amp;sdate=2018-04-27+21:15&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_46">9:15p</a>
                            </li>
                            <li id="movehallsLI_47">
                                <a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=222946115&amp;tid=AAFQQ&amp;sdate=2018-04-27+21:15&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_48">9:15p</a>
                            </li>
                            <li id="movehallsLI_49">
                                <a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=217594029&amp;tid=AAFQQ&amp;sdate=2018-04-27+22:30&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_50">10:30p</a>
                            </li>
                        </ol>
                    </li>
                    {/*<li id="movehallsLI_51">*/}
                        {/*<ul id="movehallsUL_52">*/}
                            {/*<li id="movehallsLI_53">*/}
                                {/*<a href="#" id="movehallsA_54">Closed caption</a>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_55">*/}
                                {/*<a href="#" id="movehallsA_56">Accessibility devices available</a>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_57">*/}
                                {/*<a href="#" id="movehallsA_58">Reserved seating</a>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_59">*/}
                                {/*<a href="#" id="movehallsA_60">No passes</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        {/*<ol id="movehallsOL_61">*/}
                            {/*<li id="movehallsLI_62">*/}
                                {/*<span id="movehallsSPAN_63">5:30p</span>*/}
                            {/*</li>*/}
                            {/*<li id="movehallsLI_64">*/}
                                {/*<a href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=222946114&amp;tid=AAFQQ&amp;sdate=2018-04-27+17:30&amp;mid=199925&amp;from=mov_det_showtimes" id="movehallsA_65">5:30p</a>*/}
                            {/*</li>*/}
                        {/*</ol>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.loginUser
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser: loginUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Movie_Halls);
