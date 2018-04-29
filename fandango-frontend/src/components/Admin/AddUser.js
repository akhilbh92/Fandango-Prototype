import React, {Component} from 'react';
import NavBar from './Navigation';
import CommonHeader from '../header/CommonHeader';
import { Alert, Button } from 'react-bootstrap';
import * as API from '../../api/apicall_for_users';
import { ToastContainer, toast } from 'react-toastify';


class AddUser extends Component {

    notify = (msg) => toast(msg);
    
    constructor(props){
        super(props);
        this.state = {
            fName: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        API.doSignup(this.state).then((status) => {
            if(status.message == 'The password is too weak' || status.message == 'User Already Exist in the system with this email address.') {
                this.notify(status.message);
            }
            else {
                this.notify('User Profile added successfully');
            }
        });
    }s

    render(){
        return (
            <div id='UpdateUser' className="admin-sub-header"> 
                <CommonHeader />
                <NavBar />
                <form>
                <br />
                <h3 id="form-header"> <strong> Add User Profile </strong> </h3> 
                <br/> <br/>
                <div className="AddUserForm"> 
                    <div className= "admin-forms">
                        <div className="form-group row">
                            <label htmlFor="fName"
                                className="col-sm-2 col-form-label label-color"><strong> First Name </strong></label>
                            <div className={'col-sm-9' }>
                                <input className="form-control"
                                    id="fName"
                                    name="fName"
                                    value={this.state.fName}
                                    required 
                                    onChange={(event) => {
                                        this.setState({
                                            fName: event.target.value
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
                        <label htmlFor="password"
                            className="col-sm-2 col-form-label label-color"><strong> Set Password </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="password"
                                name="password"
                                value={this.state.password}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row"> 
                    <div className="col-sm-9"> </div>        
                    <div className="col-sm-2">       
                        <Button id="submit-user"  className="btn btn-primary" onClick={this.handleSubmit}> Add User </Button>
                        <ToastContainer />
                    </div>      
                    <br/> <br/>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
  
export default AddUser;