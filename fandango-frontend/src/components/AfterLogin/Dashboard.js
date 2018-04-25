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

                    <div className="dashboard">
                        <div className="row">
                            <div className="large-12 columns">
                                <h1 className="page-header vip-logo " >
                                    My Account <span className="page-header-emphasis">FANDANGO</span>
                                    <span className="page-header-emphasis">VIP</span>
                                </h1>
                                <nav className="page-navigation">
                                    <ul className="page-navigation-list">
                                        <li className="page-navigation-item"><Link className="page-navigation-link" to="/dashboard">Account Settings</Link></li>
                                        <li className="page-navigation-item"><Link className="page-navigation-link" to="/purchasehistory">Purchase History</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 account-view">
                        <h2 className="account-font">BASIC INFORMATION</h2>
                        <p className="account-details">Change your personal information of your Fandango VIP account here..</p>
                        <div className="account-edit">
                            <Link to="/preferences">
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span className="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 account-view">
                        <h2 className="account-font">CHANGE EMAIL</h2>
                        <p className="account-details">Change the email address of your Fandango VIP account..</p>
                        <div className="account-edit">
                            <Link to="/preferences">
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span className="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 account-view">
                        <h2 className="account-font">CHANGE PHONE</h2>
                        <p className="account-details">Change the phone number of your Fandango VIP account..</p>
                        <div className="account-edit">
                            <Link to="/preferences">
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span className="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 account-view">
                        <h2 className="account-font">CHANGE PASSWORD</h2>
                        <p className="account-details">Change the password of your Fandango VIP account..</p>
                        <div className="account-edit">
                            <Link to="/preferences">
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span className="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-offset-2 col-md-8 account-view">
                        <h2 className="account-font">PAYMENT METHOD</h2>
                        <p className="account-details">Save a credit/debit card to your account. It's faster and OPTIONAL!!..</p>
                        <div className="account-edit">
                            <Link to="/preferences">
                                <button type="button" className="btn btn-default btn-sm" style={{ backgroundColor: "#3d3d3d", color: "white"}}>
                                    <span className="glyphicon glyphicon-edit" style={{ color: "white"}}></span> Edit
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