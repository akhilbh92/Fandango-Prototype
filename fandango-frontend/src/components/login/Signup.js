import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fandangoLogo from './fandango-logo.jpg'
import './login.css'
import * as API from  './../../api/apicall_for_users';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: ''
        }

        this.handleSignUp = this.handleSignUp.bind(this);

    }

    handleSignUp = () => {
        API.doSignup(this.state)
    }

    render(){
        return(
            <div className="site-wrep signin vipsignin">
                <div>
                    <header id="registration-header" className="registration-header" role="banner">
                        <nav  className="nav-bar">
                            <div className="row">
                                <div className="large-11 large-centered columns">
                                    <ul className="inline-items">
                                        <li className="site-logo">
                                            <Link className="fandango-logo" to="/">
                                                <img src={fandangoLogo} alt="Fandango Logo" className="brand-img" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="registration-mode right">

                                        <span>Already have a Fandango VIP Account?</span> &nbsp;<Link to="/login" className="cta">SIGN IN</Link>


                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>

                <div className="sign-form">
                    <div className="sub-panel">
                        <p className="join-header">FANDANGO<span className="page-header-emphasis">VIP</span>

                            <span className="registration-caption hide-for-small-only">(And Become eligible for VIP+ Points)</span>
                            <span className="registration-caption show-for-small-only">(And Become eligible for VIP+ Points)</span>

                        </p>
                        <label htmlFor="FirstnameBox" >First Name</label>
                        <input
                            type="text"
                            id="FirstnameBox"
                            onChange={(event)=>{
                                this.setState({
                                    fname:event.target.value,
                                    type:true
                                });
                            }}
                            required
                            autoFocus
                        />
                        <label htmlFor="UsernameBox" >Email Address</label>
                        <input
                            type="text"
                            id="UsernameBox"
                            onChange={(event)=>{
                                this.setState({
                                    email:event.target.value,
                                    type:true
                                });
                            }}
                            required
                        />
                        <label htmlFor="PasswordBox" >Password</label>
                        <input
                            type="password"
                            id="PasswordBox"
                            onChange={(event)=>{
                                this.setState({
                                    password:event.target.value,
                                    type:true
                                });
                            }}
                            required

                        />
                        <small className="password-instruction">Password should be at-least 8 in length.</small>
                        <label htmlFor="ConfirmPasswordBox" >Confirm Password</label>
                        <input  type="password" id="ConfirmPasswordBox" />
                        <button className="btn-cta full-width" alternatetext="Join Now for Free" onClick={()=> this.handleSignUp()}>Join Now htmlFor Free</button>

                    </div>

                </div>




            </div>
        )


    }
}

export default (Signup);