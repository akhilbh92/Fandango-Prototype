import React, { Component } from 'react';
import './dashboard.css';
import HomeHeader from './HomeHeader';
import {Link} from 'react-router-dom'

class AccountPreferences extends  Component {

    render() {
        return (
            <div>
                <div className="site-wrap" >
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

                    <div class="col-md-offset-2 col-md-8 preferences-view">
                        <h2 class="account-font">BASIC INFORMATION</h2>
                    </div>

                    <div class="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 class="first-element">First name</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Last name</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Address</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">City</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">State</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Zip code</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <Link to="/preferences" >
                            <button type="button" class="btn  save-button" style={{ }}>
                                 SAVE
                            </button>
                        </Link>
                    </div>

                    <div class="col-md-offset-2 col-md-8 preferences-view">
                        <h2 class="account-font">CHANGE EMAIL</h2>
                    </div>
                    <div class="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 class="first-element">Current Email</h5>
                        <h5 class="first-element" style={{fontWeight: 'bold'}}>ADMIN@ADMIN.COM</h5>
                        <h5 class="first-element">New Email</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Confirm Email</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <Link to="/preferences" >
                            <button type="button" class="btn  save-button" style={{ }}>
                                SAVE
                            </button>
                        </Link>
                    </div>

                    <div class="col-md-offset-2 col-md-8 preferences-view">
                        <h2 class="account-font">CHANGE PHONE</h2>
                    </div>
                    <div class="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 class="first-element">Current Phone</h5>
                        <h5 class="first-element" style={{fontWeight: 'bold'}}>9998887770 </h5>
                        <h5 class="first-element">New Phone</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Confirm Phone</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <Link to="/preferences" >
                            <button type="button" class="btn  save-button" style={{ }}>
                                SAVE
                            </button>
                        </Link>
                    </div>

                    <div class="col-md-offset-2 col-md-8 preferences-view">
                        <h2 class="account-font">CHANGE PASSWORD</h2>
                    </div>
                    <div class="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 class="first-element">Passwords should be at-least 8 in length</h5>
                        <h5 class="first-element">Current Password</h5>
                        <input type="password" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">New Password</h5>
                        <input type="password" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Confirm Password</h5>
                        <input type="password" style={{ marginLeft: '20px', width: '40%'}} />
                        <Link to="/preferences" >
                            <button type="button" class="btn  save-button" style={{ }}>
                                SAVE
                            </button>
                        </Link>
                    </div>

                    <div class="col-md-offset-2 col-md-8 preferences-view">
                        <h2 class="account-font">PAYMENT METHOD</h2>
                    </div>
                    <div class="col-md-offset-2 col-md-8 preferences-expand" style={{marginBottom: '50px'}}>
                        <h5 class="first-element">Card Number</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Expiration Date  (mmyy format)</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <h5 class="first-element">Billing Zip Code</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%'}} />
                        <Link to="/preferences" >
                            <button type="button" class="btn  save-button" style={{ }}>
                                SAVE
                            </button>
                        </Link>
                    </div>




                </div>
            </div>
        )


    }

}

export default AccountPreferences;