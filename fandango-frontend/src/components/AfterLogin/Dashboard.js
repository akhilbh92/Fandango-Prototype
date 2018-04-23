import React, { Component } from 'react';
import './dashboard.css';
import HomeHeader from './HomeHeader';
import {Link} from 'react-router-dom'

class Dashboard extends  Component {

    render() {
        return (
            <div>
                <div className="site-wrap">
                    <HomeHeader/>

                    <div class="page-header-container">
                        <div class="row">
                            <div class="large-12 columns">
                                <h1 class="page-header vip-logo " >
                                    My Account <span class="page-header-emphasis">FANDANGO</span>
                                    <span class="page-header-emphasis">VIP</span>
                                </h1>
                                <nav class="page-navigation">
                                    <ul class="page-navigation-list">
                                        <li class="page-navigation-item"><Link class="page-navigation-link" to="/dashboard">Account Settings</Link></li>
                                        <li class="page-navigation-item"><Link class="page-navigation-link" to="/purchasehistory">Purchase History</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 account-view">
                        <h2 class="account-font">BASIC INFORMATION</h2>
                        <p class="account-details">Change your personal information of your Fandango VIP account here..</p>
                        <div class="account-edit">
                           <Link to="/preferences">
                                <button type="button" class="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span class="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                           </Link>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 account-view">
                        <h2 class="account-font">CHANGE EMAIL</h2>
                        <p class="account-details">Change the email address of your Fandango VIP account..</p>
                        <div class="account-edit">
                            <Link to="/preferences">
                            <button type="button" class="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                <span class="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 account-view">
                        <h2 class="account-font">CHANGE PHONE</h2>
                        <p class="account-details">Change the phone number of your Fandango VIP account..</p>
                        <div class="account-edit">
                            <Link to="/preferences">
                                <button type="button" class="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span class="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 account-view">
                        <h2 class="account-font">CHANGE PASSWORD</h2>
                        <p class="account-details">Change the password of your Fandango VIP account..</p>
                        <div class="account-edit">
                            <Link to="/preferences">
                            <button type="button" class="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                <span class="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div class="col-md-offset-2 col-md-8 account-view">
                        <h2 class="account-font">PAYMENT METHOD</h2>
                        <p class="account-details">Save a credit/debit card to your account. It's faster and OPTIONAL!!..</p>
                        <div class="account-edit">
                            <Link to="/preferences">
                            <button type="button" class="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                <span class="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )


    }

}

export default Dashboard;