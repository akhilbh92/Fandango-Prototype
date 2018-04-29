import React, {Component} from 'react';
import NavBar from './Navigation';
import CommonHeader from '../header/CommonHeader';
import { Button } from 'react-bootstrap';
import UserForm from './UserForm';
import * as API from '../../api/API';
import '../MovieHall/subheader.css';

class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            userDetails: '',
            userDetailsArrived: false
        };
        this.getUser = this.getUser.bind(this);
    }

    getUser(){
        API.getUserByEmail(this.state.email).then((result)=> {
            this.setState({
                userDetails: result.data,
                userDetailsArrived: true
            })   
            console.log(this.state);  
        })
    }

    render(){
        return (
            <div id='UpdateUser' className="admin-sub-header">  
                <CommonHeader />
                <NavBar />
                <div className= "searchUser">
                <h4> Search Email to update profile </h4>
                <br/> 
                    <div className="form-group row">
                    <div className={'col-sm-2' }> </div>
                        <label htmlFor="searchUser"
                            className="col-sm-1 col-form-label label-color"><strong> Email: </strong></label>
                        <div className={'col-sm-6' }>
                            <input className="form-control"
                                id="searchUser"
                                name="searchUser"
                                value={this.state.email}
                                placeholder = "Enter Email"
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                        <div className={'col-sm-2' }>
                            <Button id="search-user-btn"  className="btn btn-primary" onClick={this.getUser}> Search </Button>
                        </div>
                    </div>
                    <div className="user-gap"> </div>
                    {
                        this.state.userDetailsArrived &&
                        <UserForm userDetails = {this.state.userDetails} email={this.state.email} />
                    }
                </div>
            </div>
        );
    }
}
  
export default UpdateUser;