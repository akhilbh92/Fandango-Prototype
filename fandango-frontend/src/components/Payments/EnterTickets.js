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
            price: 10,
            card: '',
            name: '',
            expiration: '',
            cvv: '',
            ticketerror: '',
            ticketmessage: '',
            carderror: '',
            cardmessage: '',
            expirationerror: '',
            expirationmessage: '',
            nameerror: '',
            namemessage: '',
            cvverror: '',
            cvvmessage: '',
            ticket2error: '',
            ticket2message: ''

        }
    }

    handleAuthorize = (userdata) => {
        this.setState({
            ticketerror: '',
            ticketmessage: '',
            type: true
        }, () => this.handleTickets(userdata));
    }
    handleTickets = (userdata) => {

        if (this.state.no_of_seats == 0 || this.state.no_of_seats > 60) {
            this.setState({
                ticketmessage: 'Invalid no. of seats or You have demanded more seats than available',
                ticketerror: 1,
                type: true
            }, () => this.doPayment(userdata));
        }
        else {
            this.doPayment(userdata);
        }
    }


    doPayment = (userdata) => {
        API.bookMovie(userdata.payload)
    }

    handleBuy = (userdata) => {
        this.setState({
            carderror: '',
            cardmessage: '',
            expirationerror: '',
            expirationmessage: '',
            nameerror: '',
            namemessage: '',
            cvverror: '',
            cvvmessage: '',
            ticket2error: '',
            ticket2message: '',
            type: true
        }, () => this.handleCard(userdata));
    }

    handleCard = (userdata) => {

        if (this.state.card.length != 12 ) {
            this.setState({
                cardmessage: 'Invalid card no',
                carderror: 1,
                type: true
            }, () => this.handleExpiration(userdata));
        }
        else {
            this.handleExpiration(userdata);
        }
    }

    handleExpiration = (userdata) => {

        if ( this.state.expiration.length != 4) {
            this.setState({
                expirationmessage: 'Invalid expiration format',
                expirationerror: 1,
                type: true
            }, () => this.handleName(userdata));
        }
        else {
            this.handleName(userdata);
        }
    }

    handleName = (userdata) => {

        if (this.state.name.length == 0 ) {
            this.setState({
                namemessage: 'Name cannot be empty',
                nameerror: 1,
                type: true
            }, () => this.handleCVV(userdata));
        }
        else {
            this.handleCVV(userdata);
        }
    }

    handleCVV = (userdata) => {

        if (this.state.cvv.length != 3 ) {
            this.setState({
                cvvmessage: 'Invalid cvv',
                cvverror: 1,
                type: true
            }, () => this.handleTickets2(userdata));
        }
        else {
            this.handleTickets2(userdata);
        }
    }

    handleTickets2 = (userdata) => {

        if (this.state.no_of_seats == 0 || this.state.no_of_seats > 60) {
            this.setState({
                ticket2message: 'Invalid no. of seats or You have demanded more seats than available',
                ticket2error: 1,
                type: true
            }, () => this.doPayment2(userdata));
        }
        else {
            this.doPayment2(userdata);
        }
    }

    doPayment2 = (userdata) => {
        if(this.state.carderror != 1 && this.state.expirationerror != 1 && this.state.nameerror != 1 && this.state.cvverror != 1 && this.state.ticket2error != 1) {
            API.bookMovie(userdata.payload)
        }
    }



    render(){
        return(
            <div className="site-wrep signin vipsignin" style={{ }} >
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

                <div className="open-form" style={{ minHeight: '825px', marginTop: '25px'}}>
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
                            CARD NO: 9999 4444 2222 1111<br />


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
                            <Message message={this.state.ticketmessage} />

                            <br />

                            <button type="button"  className="btn" style={{backgroundColor: '#F15500',color: 'white'}}
                                                onClick={ () => this.handleAuthorize(this.props.doneBooking(this.state))}>USE THIS CARD</button>


                        </div>
                        <hr />

                        <div>
                            USE ANOTHER CARD

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
                            <Message message={this.state.ticket2message} />


                            <label for="CardnumberBox" >CARD NUMBER:</label>
                            <input
                                type="number"
                                id="CardnumberBox"
                                required
                                autoFocus
                                onChange={(event) => {
                                    this.setState({
                                        card: event.target.value,
                                        type: true
                                    });
                                }}
                            />
                            <Message message={this.state.cardmessage} />

                            <label for="ExpirationBox" >EXPIRATION DATE:(mmyy format) </label>
                            <input
                                type="number"
                                id="ExpirationBox"
                                required
                                autoFocus
                                onChange={(event) => {
                                    this.setState({
                                        expiration: event.target.value,
                                        type: true
                                    });
                                }}
                            />
                            <Message message={this.state.expirationmessage} />


                            <label for="NameBox" >NAME ON THE CARD: </label>
                            <input
                                type="text"
                                id="NameBox"
                                required
                                autoFocus
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value,
                                        type: true
                                    });
                                }}
                            />
                            <Message message={this.state.namemessage} />


                            <label for="ZipBox" >CVV: </label>
                            <input
                                type="number"
                                id="ZipBox"
                                required
                                autoFocus
                                onChange={(event) => {
                                    this.setState({
                                        cvv: event.target.value,
                                        type: true
                                    });
                                }}
                            />
                            <Message message={this.state.cvvmessage} />

                            <br />

                        </div>

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
