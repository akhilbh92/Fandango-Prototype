import React, {Component} from 'react';
import fandangoLogo from './../login/fandango-logo.jpg';
import {Link} from 'react-router-dom';


class EnterTickets extends Component{

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
                            <input type="number" style={{ width:'50px', marginLeft: '42%'}}/>
                        </div>
                        <hr />

                        <Link to=""><button type="button" className="btn btn-warning" style={{ backgroundColor: "#F15500"}}>BUY TICKETS</button></Link>


                    </div>

                </div>



            </div>
        )
    }
}

export default EnterTickets;
