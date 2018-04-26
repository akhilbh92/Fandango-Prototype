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

        API.doLogin(userdata)
            .then((status) => {
                this.props.loginUser(status.data);
                console.log("YOu need:" + this.props.user.userId);
            });
    };

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

                                    <span>Don't have a Fandango VIP Account?</span> &nbsp;<Link to="/signup" className="cta">Join now for free</Link>


                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                </div>

                <div className="open-form">
                    <div className="sub-panel">
                        <p className="join-header">FANDANGO<span className="page-header-emphasis">VIP</span>

                            <span className="registration-caption hide-for-small-only"></span>
                            <span className="registration-caption show-for-small-only"></span>

                        </p>

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
                        <button className="btn-cta full-width" alternatetext="Sign In" onClick={() => this.handleSubmit(this.state)}>Sign In</button>

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