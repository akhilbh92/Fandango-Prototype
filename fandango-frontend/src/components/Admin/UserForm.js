import React, {Component} from 'react';
import { Alert, Button } from 'react-bootstrap';
import * as API from '../../api/API';
import { ToastContainer, toast } from 'react-toastify';


class UserForm extends Component {
    notify = (msg) => toast(msg);

    constructor(props){
        super(props);
        this.state = {
            userId: '',
            role: '',
            firstName: '',
            lastName: '',
            email: this.props.email,
            address: '',
            city: '',
            state: '',
            zipcode: '',
            phoneNumber: '',
            hallId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props.userDetails);
        if(this.props.userDetails) {
        let res = this.props.userDetails;
        this.setState({
                userId: res.userId,
                role: res.role,
                firstName: res.first_name,
                lastName: res.last_name,
                address: res.address,
                city: res.city,
                state: res.state ,
                zipcode: res.zipcode,
                phoneNumber: res.phone_number,
                hallId: res.hall_id
            });
            // document.getElementById('form-header').innerHTML = 'Update User Profile';
            // document.getElementById('submit-user').innerHTML = 'Update User';
            // document.getElementById('response-message').innerHTML = 'User Profile updated successfully';
        }
    }

    handleSubmit(){
        if(this.props.userDetails) {
        API.updateProfile(this.state.userId, this.props.email, this.state.role, this.state.firstName, this.state.lastName, 
            this.state.address, this.state.city, this.state.state, this.state.zipcode, this.state.phoneNumber, 
            this.state.hallId). then((result) => {
                this.notify('User Profile updated successfully');
            }).catch((err)=>{
                this.notify(err);
            });
        } 
    }

    render(){
        return (
            <div className='UpdateUserForm'> 
                <br />
                <h3 id="form-header"> <strong> Update User Profile </strong> </h3> 
                <br /><br />
                <form> 
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="role"
                            className="col-sm-2 col-form-label label-color"><strong> Role </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="role"
                                name="role"
                                value={this.state.role}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        role: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="firstName"
                            className="col-sm-2 col-form-label label-color"><strong> First Name </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        firstName: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="lastName"
                            className="col-sm-2 col-form-label label-color"><strong> Last Name </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        lastName: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="email"
                            className="col-sm-2 col-form-label label-color"><strong> Email </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="email"
                                name="email"
                                value={this.state.email}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="address"
                            className="col-sm-2 col-form-label label-color"><strong> Address </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="address"
                                name="address"
                                value={this.state.address}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        address: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="city"
                            className="col-sm-2 col-form-label label-color"><strong> City </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="city"
                                name="city"
                                value={this.state.city}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="state"
                            className="col-sm-2 col-form-label label-color"><strong> State </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="state"
                                name="state"
                                value={this.state.state}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        state: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="zipcode"
                            className="col-sm-2 col-form-label label-color"><strong> Zipcode </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="zipcode"
                                name="zipcode"
                                value={this.state.zipcode}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        zipcode: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="phoneNumber"
                            className="col-sm-2 col-form-label label-color"><strong> Phone Number </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        phoneNumber: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="hallId"
                            className="col-sm-2 col-form-label label-color"><strong> Hall ID </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="hallId"
                                name="hallId"
                                value={this.state.hallId}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        hallId: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-3"> </div>                
                <div className="col-sm-5"> <p id='response-message'> User Profile added successfully </p> </div>
                <Button id="submit-user"  className="col-sm-2 btn btn-primary" onClick={this.handleSubmit}> Update User </Button>
                <ToastContainer />
                <br/> <br/>
                </form>
               
            </div>
        );
    }
}
  
export default UserForm;