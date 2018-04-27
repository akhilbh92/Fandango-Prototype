import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import {Link} from 'react-router-dom';
import avengers from './../MoviesList/avengers.jpg';


class PurchaseHistory extends Component{

    render(){
        return(
            <div>
                <div className="site-wrap">
                    <HomeHeader/>

                    <div id="TICKETS_SECTION_1">
                        <div id="TICKETS_DIV_2">
                            <div id="TICKETS_DIV_3">
                                <h1 id="H1_4">FANDANGO <span id="SPAN_5">VIP<span id="SPAN_6"></span></span></h1>
                                <nav className="page-navigation">
                                    <ul className="page-navigation-list">
                                        <li className="page-navigation-item" style={{ paddingTop: '15px', color: 'white'}}><Link className="page-navigation-link" to="/dashboard">Account Settings</Link></li>
                                        <li className="page-navigation-item"><Link className="page-navigation-link" to="/purchasehistory">Purchase History</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-offset-3 col-md-6 list-moviedetails" style={{ marginTop: '20px', height: '150px'}} >
                        <div className="img-style" style={{ height: '150px'}}>
                            <img src={avengers} className="img-peculiar" style={{ height: '150px'}}  />
                        </div>
                        <div className="movie-heading" style={{ width: '400px', paddingTop: '10px'}}>
                            <h4> AVENGERS: INFINITY WAR MARATHON</h4>
                        </div>
                        <div style={{ position: 'absolute', textAlign: 'left', marginLeft: '140px', marginTop: '60px'}}>
                            <h5> Movie Hall: AMC Eastridge</h5>
                        </div>
                        <div style={{ position: 'absolute', textAlign: 'left', marginLeft: '140px', marginTop: '85px'}}>
                            <h5> Tickets: 2</h5>
                        </div>

                        <div style={{ position: 'absolute', textAlign: 'left', marginLeft: '140px', marginTop: '110px'}}>
                            <h5> Total Price: $30</h5>
                        </div>


                    </div>



                </div>
            </div>
        )
    }
}

export  default PurchaseHistory;