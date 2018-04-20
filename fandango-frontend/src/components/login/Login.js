import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fandangoLogo from './fandango-logo.jpg'
import './login.css'

class Login extends Component{

    render(){
        return(
            <div class="site-wrap signin vipsignin">
                <div>
                <header id="registration-header" class="registration-header" role="banner">
                    <nav  class="nav-bar">
                        <div class="row">
                            <div class="large-11 large-centered columns">
                                <ul class="inline-items">
                                    <li class="site-logo">
                                        <Link class="fandango-logo" to="/">
                                            <img src={fandangoLogo} alt="Fandango Logo" class="brand-img" />
                                        </Link>
                                    </li>
                                </ul>
                                <div class="registration-mode right">

                                    <span>Don't have a Fandango VIP Account?</span> &nbsp;<Link to="/signup" class="cta">Join now for free</Link>


                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                </div>

                <div className="open-form">
                    <div className="sub-panel">
                        <p class="join-header">FANDANGO<span class="page-header-emphasis">VIP</span>

                            <span class="registration-caption hide-for-small-only"></span>
                            <span class="registration-caption show-for-small-only"></span>

                        </p>

                        <label for="UsernameBox" >Email Address</label>
                        <input  type="text" id="UsernameBox" />
                        <label for="PasswordBox" >Password</label>
                        <input  type="password" id="PasswordBox" />
                        <button class="btn-cta full-width" alternatetext="Sign In">Sign In</button>

                    </div>

                </div>


            </div>
        )


    }
}

export default (Login);