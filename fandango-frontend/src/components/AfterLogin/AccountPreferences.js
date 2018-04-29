import React, { Component } from 'react';
import './dashboard.css';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';
import * as API from '../../api/API';
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CardValidator from '../Helper/CardValidator';
let state_regex_pattern = require('../Helper/StateRegex');
let zipcode_regex = require('../Helper/ZipcodeRegex');

class AccountPreferences extends Component {

    notify = (message) => toast(message);

    constructor(props) {
        super(props);

        this.state = {
            userObj: {},
            userId: '',
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            email: '',
            newEmail: '',
            confirmEmail: '',
            phone_number: '',
            newPhone: '',
            confirmPhone: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            credit_card_number: '',
            expiration: '',
            basicInfoSubmitted: false,
            emailSubmitted: false,
            phoneSubmitted: false,
            passwordSubmitted: false,
            paymentSubmitted: false
        };

        this.updateUserDetails = this.updateUserDetails.bind(this);
        this.updateBasicInfoDetails = this.updateBasicInfoDetails.bind(this);
        this.updateEmailDetails = this.updateEmailDetails.bind(this);
        this.updatePhoneDetails = this.updatePhoneDetails.bind(this);
        this.updatePaymentDetails = this.updatePaymentDetails.bind(this);
        this.updatePasswordDetails = this.updatePasswordDetails.bind(this);
        this.validateCreditCardNo = this.validateCreditCardNo.bind(this);
    }
    componentDidMount() {
        API.getProfile({ userId: this.props.user.userId })
            .then((resultData) => {
                if (!!resultData.data) {
                    this.setState({
                        first_name: resultData.data.first_name,
                        last_name: resultData.data.last_name,
                        address: resultData.data.address,
                        city: resultData.data.city,
                        state: resultData.data.state,
                        zipcode: resultData.data.zipcode,
                        userId: resultData.data.userId,
                        email: resultData.data.email,
                        phone_number: resultData.data.phone_number,
                        credit_card_number: resultData.data.credit_card_number,
                        expiration: resultData.data.expiration
                    });
                } else {
                    console.log("No User From this ID Available");
                }
            }).catch(error => {
                this.notify(error);
            });
    }

    validateState() {
        if (this.state.state == "") {
            return false;
        }
        else if (!state_regex_pattern.test(this.state.state)) {
            return false;
        }
        else {
            return true;
        }
    }

    validateZipcode() {
        if (this.state.zipcode == "") {
            return false;
        }
        else if (!zipcode_regex.test(this.state.zipcode)) {
            return false;
        }
        else {
            return true;
        }
    }

    validateConfirmEmail() {
        if (this.state.newPassword != this.state.confirmPassword) {
            return false;
        } else {
            return true;
        }
    }

    validateConfirmPhoneNo() {
        console.log("inside phone method")
        if (this.state.newPhone != this.state.confirmPhone) {
            return false;
        } else {
            return true;
        }
    }

    validateCreditCardNo() {
        if (this.state.creditCardNumber == "") {
            return false;
        } else {
            return CardValidator.validateCardNumber(this.state.credit_card_number);
        }
    }

    validateExpiration() {
        console.log("inside expiration")
        if (this.state.expiration == "") {
            return false;
        } else {
            return CardValidator.validateExpiration(this.state.expiration);
        }
    }

    validateConfirmPassword() {
        if (this.state.newPassword != this.state.confirmPassword) {
            return false;
        } else {
            return true;
        }
    }

    updateBasicInfoDetails() {
        this.setState({ basicInfoSubmitted: true });
        console.log("validate state :", this.validateState());
        if (!!this.state.first_name && !!this.state.address
            && !!this.state.city && !!this.state.state && this.validateState()
            && this.validateZipcode()) {
            let updatedUserObj = {};
            updatedUserObj.userId = this.state.userId;
            updatedUserObj.first_name = this.state.first_name;
            updatedUserObj.last_name = this.state.last_name;
            updatedUserObj.address = this.state.address;
            updatedUserObj.city = this.state.city;
            updatedUserObj.state = this.state.state;
            updatedUserObj.zipcode = this.state.zipcode;
            this.updateUserDetails(updatedUserObj);
            this.setState({ basicInfoSubmitted: false });
        }
    }
    updateEmailDetails() {
        this.setState({ emailSubmitted: true });
        if (!!this.state.newEmail && !!this.state.confirmEmail && this.validateConfirmEmail()) {
            let updatedUserObj = {};
            updatedUserObj.userId = this.state.userId;
            updatedUserObj.email = this.state.email;
            this.updateUserDetails(updatedUserObj);
            this.setState({ emailSubmitted: false });
        }
    }
    updatePhoneDetails() {
        this.setState({ phoneSubmitted: true });
        if (!!this.state.newPhone && !!this.state.confirmPhone && this.validateConfirmPhoneNo()) {
            let updatedUserObj = {};
            updatedUserObj.userId = this.state.userId;
            updatedUserObj.phone_number = this.state.phone_number;
            this.updateUserDetails(updatedUserObj);
            this.setState({ phoneSubmitted: false });
        }
    }
    updatePasswordDetails() {
        this.setState({ passwordSubmitted: true });
        if (!!this.state.newPassword && !!this.state.confirmPassword && this.validateConfirmPassword()) {
            let updatedUserObj = {};
            updatedUserObj.userId = this.state.userId;
            updatedUserObj.oldPassword = this.state.currentPassword;
            updatedUserObj.newPassword = this.state.newPassword;
            this.updateUserDetails(updatedUserObj);
            this.setState({ passwordSubmitted: false });
        }
    }

    updatePaymentDetails() {
        this.setState({ paymentSubmitted: true });
        if (!!this.state.credit_card_number && !!this.state.expiration && this.validateCreditCardNo()
            && this.validateExpiration()) {
            let updatedUserObj = {};
            updatedUserObj.userId = this.state.userId;
            updatedUserObj.credit_card_number = this.state.credit_card_number;
            updatedUserObj.expiration = this.state.expiration;
            this.updateUserDetails(updatedUserObj);
            this.setState({ paymentSubmitted: false });
        }
    }

    updateUserDetails(updatedUserObj) {
        API.updateUserDetails(updatedUserObj)
            .then((resultData) => {
                if (!!resultData.data) {
                    this.notify(resultData.data);
                } else {
                    console.log("No User From this ID Available");
                }
            }).catch(error => {
                this.notify(error);
            });

    }

    render() {
        return (
            <div>
                <ToastContainer />
                <div className="site-wrap" >
                    <HomeHeader />
                    <div id="TICKETS_SECTION_1">
                        <div id="TICKETS_DIV_2">
                            <div id="TICKETS_DIV_3">
                                <h1 id="H1_4">FANDANGO <span id="SPAN_5">VIP<span id="SPAN_6"></span></span></h1>
                                <nav className="page-navigation">
                                    <ul className="page-navigation-list">
                                        <li className="page-navigation-item" style={{ paddingTop: '15px', color: 'white' }}><Link className="page-navigation-link" to="/dashboard">Account Settings</Link></li>
                                        <li className="page-navigation-item"><Link className="page-navigation-link" to="/purchasehistory">Purchase History</Link></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-offset-2 col-md-8 preferences-view">
                        <h2 className="account-font">BASIC INFORMATION</h2>
                    </div>

                    <div className="col-md-offset-2 col-md-8 preferences-expand">
                        <div className={(this.state.basicInfoSubmitted && !this.state.first_name ? ' has-error' : '')}>
                            <h5 className="first-element">First name</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.first_name}
                                onChange={(event) => {
                                    this.setState({
                                        first_name: event.target.value
                                    });
                                }} />
                            {this.state.basicInfoSubmitted && !this.state.first_name &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">First Name is required</div><br /></div>
                            }
                        </div>
                        <h5 className="first-element">Last name</h5>
                        <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                            value={this.state.last_name}
                            onChange={(event) => {
                                this.setState({
                                    last_name: event.target.value
                                });
                            }} />
                        <div className={(this.state.basicInfoSubmitted && !this.state.address ? ' has-error' : '')}>
                            <h5 className="first-element">Address</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.address}
                                onChange={(event) => {
                                    this.setState({
                                        address: event.target.value
                                    });
                                }} />
                            {this.state.basicInfoSubmitted && !this.state.address &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Address is required</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.basicInfoSubmitted && !this.state.city ? ' has-error' : '')}>
                            <h5 className="first-element">City</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.city}
                                onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    });
                                }} />
                            {this.state.basicInfoSubmitted && !this.state.city &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">City is required</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.basicInfoSubmitted && (!this.state.state || !(this.validateState())) ? ' has-error' : '')}>
                            <h5 className="first-element">State</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.state}
                                onChange={(event) => {
                                    this.setState({
                                        state: event.target.value
                                    });
                                }} />
                            {this.state.basicInfoSubmitted && (!this.state.state || !(this.validateState())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">State is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.basicInfoSubmitted && (!this.state.zipcode || !(this.validateZipcode())) ? ' has-error' : '')}>
                            <h5 className="first-element">Zip code</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.zipcode}
                                onChange={(event) => {
                                    this.setState({
                                        zipcode: event.target.value
                                    });
                                }} />
                            {this.state.basicInfoSubmitted && (!this.state.zipcode || !(this.validateZipcode())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Zipcode is Invalid</div><br /></div>
                            }
                        </div>
                        <button type="button" className="btn  save-button" onClick={this.updateBasicInfoDetails}>
                            SAVE
                            </button>
                    </div>

                    <div className="col-md-offset-2 col-md-8 preferences-view">
                        <h2 className="account-font">CHANGE EMAIL</h2>
                    </div>
                    <div className="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 className="first-element">Current Email</h5>
                        <h5 className="first-element" style={{ fontWeight: 'bold' }}>{this.state.email}</h5>
                        <div className={(this.state.emailSubmitted && (!this.state.newEmail) ? ' has-error' : '')}>
                            <h5 className="first-element">New Email</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.newEmail}
                                onChange={(event) => {
                                    this.setState({
                                        newEmail: event.target.value
                                    });
                                }} />
                            {this.state.emailSubmitted && (!this.state.newEmail) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">New Email is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.emailSubmitted && (!this.state.confirmEmail || !(this.validateConfirmEmail())) ? ' has-error' : '')}>
                            <h5 className="first-element">Confirm Email</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.confirmEmail}
                                onChange={(event) => {
                                    this.setState({
                                        confirmEmail: event.target.value
                                    });
                                }} />
                            {this.state.emailSubmitted && (!this.state.confirmEmail || !(this.validateConfirmEmail())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Confirm Email is Invalid</div><br /></div>
                            }
                        </div>
                        <button type="button" className="btn  save-button" onClick={this.updateEmailDetails}>
                            SAVE
                            </button>
                    </div>

                    <div className="col-md-offset-2 col-md-8 preferences-view">
                        <h2 className="account-font">CHANGE PHONE</h2>
                    </div>
                    <div className="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 className="first-element">Current Phone</h5>
                        <h5 className="first-element" style={{ fontWeight: 'bold' }}>{this.state.phone_number}</h5>
                        <div className={(this.state.phoneSubmitted && (!this.state.newPhone) ? ' has-error' : '')}>
                            <h5 className="first-element">New Phone</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.newPhone}
                                onChange={(event) => {
                                    this.setState({
                                        newPhone: event.target.value
                                    });
                                }} />
                            {this.state.phoneSubmitted && (!this.state.newPhone) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">New Phone Number is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.phoneSubmitted && (!this.state.confirmPhone || !(this.validateConfirmPhoneNo())) ? ' has-error' : '')}>
                            <h5 className="first-element">Confirm Phone</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.confirmPhone}
                                onChange={(event) => {
                                    this.setState({
                                        confirmPhone: event.target.value
                                    });
                                }} />
                            {this.state.phoneSubmitted && (!this.state.confirmPhone || !(this.validateConfirmPhoneNo())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Confirm Phone Number is Invalid</div><br /></div>
                            }
                        </div>
                        <button type="button" className="btn  save-button" onClick={this.updatePhoneDetails}>
                            SAVE
                            </button>
                    </div>

                    <div className="col-md-offset-2 col-md-8 preferences-view">
                        <h2 className="account-font">CHANGE PASSWORD</h2>
                    </div>
                    <div className="col-md-offset-2 col-md-8 preferences-expand">
                        <h5 className="first-element">Passwords should be at-least 8 in length</h5>
                        <div className={(this.state.passwordSubmitted && (!this.state.currentPassword) ? ' has-error' : '')}>
                            <h5 className="first-element">Current Password</h5>
                            <input type="password" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.currentPassword}
                                onChange={(event) => {
                                    this.setState({
                                        currentPassword: event.target.value
                                    });
                                }} />
                            {this.state.passwordSubmitted && (!this.state.currentPassword) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Current Password is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.passwordSubmitted && (!this.state.newPassword) ? ' has-error' : '')}>
                            <h5 className="first-element">New Password</h5>
                            <input type="password" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.newPassword}
                                onChange={(event) => {
                                    this.setState({
                                        newPassword: event.target.value
                                    });
                                }} />
                            {this.state.passwordSubmitted && (!this.state.newPassword) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">New Password is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.passwordSubmitted && (!this.state.confirmPassword || !(this.validateConfirmPassword())) ? ' has-error' : '')}>
                            <h5 className="first-element">Confirm Password</h5>
                            <input type="password" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.confirmPassword}
                                onChange={(event) => {
                                    this.setState({
                                        confirmPassword: event.target.value
                                    });
                                }} />
                            {this.state.passwordSubmitted && (!this.state.confirmPassword || !(this.validateConfirmPassword())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Confirm Password is required</div><br /></div>
                            }
                        </div>
                        <button type="button" className="btn  save-button" onClick={this.updatePasswordDetails}>
                            SAVE
                            </button>
                    </div>

                    <div className="col-md-offset-2 col-md-8 preferences-view">
                        <h2 className="account-font">PAYMENT METHOD</h2>
                    </div>
                    <div className="col-md-offset-2 col-md-8 preferences-expand" style={{ marginBottom: '50px' }}>
                        <div className={(this.state.paymentSubmitted && (!this.state.credit_card_number || !(this.validateCreditCardNo())) ? ' has-error' : '')}>
                            <h5 className="first-element">Card Number</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.credit_card_number}
                                onChange={(event) => {
                                    this.setState({
                                        credit_card_number: event.target.value
                                    });
                                }} />
                            {this.state.paymentSubmitted && (!this.state.credit_card_number || !(this.validateCreditCardNo())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Credit Card is Invalid</div><br /></div>
                            }
                        </div>
                        <div className={(this.state.paymentSubmitted && (!this.state.expiration || !(this.validateExpiration())) ? ' has-error' : '')}>
                            <h5 className="first-element">Expiration Date  (MM/YY format)</h5>
                            <input type="text" style={{ marginLeft: '20px', width: '40%' }}
                                value={this.state.expiration}
                                onChange={(event) => {
                                    this.setState({
                                        expiration: event.target.value
                                    });
                                }} />
                            {this.state.paymentSubmitted && (!this.state.expiration || !(this.validateExpiration())) &&
                                <div><div style={{ float: 'left', paddingTop: '0px' }} className="help-block first-element">Expiration is Invalid</div><br /></div>
                            }
                        </div>
                        <button type="button" className="btn  save-button" onClick={this.updatePaymentDetails}>
                            SAVE
                            </button>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.loginUser
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(AccountPreferences);