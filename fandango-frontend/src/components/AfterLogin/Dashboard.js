import React, { Component } from 'react';
import './dashboard.css';
import HomeHeader from './HomeHeader';
import {Link} from 'react-router-dom'

class Dashboard extends  Component {

    render() {
        return (
            <div>
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
            </div>
        )


    }

}

export default Dashboard;