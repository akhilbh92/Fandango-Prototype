import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fandangoLogo from './fandango-logo.jpg';
import { connect } from 'react-redux';
import {loginUser} from "../../actions";
import * as API from  './../../api/apicall_for_users';


import './login.css'

class Login extends Component{

    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (userdata) => {

        API.doLogin(userdata.payload)
            .then((status) => {
                console.log(this.props.user.email);
            });
    };

    render(){
        return(
            <div class="site-wrep signin vipsignin">
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
                        <label for="PasswordBox" >Password</label>
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
                        <button class="btn-cta full-width" alternatetext="Sign In" onClick={() => this.handleSubmit(this.props.loginUser(this.state))}>Sign In</button>

                    </div>

                </div>


            </div>
        )


    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({loginUser: loginUser}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Login);