import React, {Component} from 'react';
import fandangoLogo from './../login/fandango-logo.jpg';
import {Link} from 'react-router-dom';
import Message from '../Message/Message';
import {connect} from "react-redux";
import {doneBooking} from "../../actions";
import {bindActionCreators} from "redux";
import * as API from './../../api/apicall_for_users';


class EnterTickets extends Component{

    constructor(props) {
        super(props);

        this.state = {
            movie_schedule_id: "700ef24c-b1f6-47e0-9686-883af1938b0a",
            total_price:1,
            tax:'',
            no_of_seats:0,
            status:"A",
            price: 10

        }
    }

    handleBuy = (userdata) => {
     API.bookMovie(userdata.payload)
    }

    render(){
        return(
            <div className="site-wrep signin vipsignin">
                <div>
                    <header id="registration-header" class="registration-header" role="banner">
                        <nav  className="nav-bar">
                            <div className="row">
                                <div className="large-11 large-centered columns">
                                    <ul className="inline-items">
                                        <li className="site-logo">
                                            <Link className="fandango-logo" to="/">
                                                <img src={fandangoLogo} alt="Fandango Logo" class="brand-img" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <div class="registration-mode right">
                                        You're a guaranteed ticket away from the perfect movie night.

                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>

                <div className="open-form">
                    <div className="sub-panel">
                        <p className="join-header">FANDANGO<span class="page-header-emphasis">VIP</span>

                            <span className="registration-caption hide-for-small-only"></span>
                            <span className="registration-caption show-for-small-only"></span>

                        </p>

                        <hr />

                        <Link to="">Select a new Showtime</Link>
                        <hr />
                        Price: $ 11
                        <hr />
                        <div>
                            Tickets:
                            <input
                                type="number"
                                style={{ width:'50px', marginLeft: '42%'}}
                                onChange={(event) => {
                                    this.setState({
                                        no_of_seats: event.target.value,
                                        total_price: this.state.price * event.target.value,
                                        tax: 0.09 * (this.state.price * event.target.value) ,

                                        type: true
                                    });
                                }}
                            />

                        </div>
                        <hr />

                        <button
                            type="button"
                            className="btn btn-warning"
                            style={{ backgroundColor: "#F15500"}} onClick={ () => this.handleBuy(this.props.doneBooking(this.state))}>BUY TICKETS</button>


                    </div>

                </div>



            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        booking: state.doneBooking
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ doneBooking: doneBooking }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(EnterTickets);
