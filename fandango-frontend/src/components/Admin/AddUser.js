import React, {Component} from 'react';
import NavBar from './Navigation';
import CommonHeader from '../header/CommonHeader';
import { Alert, Button } from 'react-bootstrap';
import * as API from '../../api/apicall_for_users';
import '../MovieHall/subheader.css';

class AddUser extends Component {
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
            console.log(status);
            if(status.message == 'The password is too weak' || status.message == 'User Already Exist in the system with this email address.') {
                document.getElementById('hidden').innerHTML = status.message;
                document.getElementById('hidden').style.display = 'block';
            }
            else {
                document.getElementById('response').style.display = 'block';
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
                                        document.getElementById('response').style.display = 'none';
                                        document.getElementById('hidden').style.display = 'none';
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
                                    document.getElementById('response').style.display = 'none';
                                    document.getElementById('hidden').style.display = 'none';
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
                                    document.getElementById('response').style.display = 'none';
                                    document.getElementById('hidden').style.display = 'none';
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
                    <div className="col-sm-2"> 
                    
                    </div>     
                    <div className="col-sm-7"> 
                        <Alert bsStyle="warning" id='hidden'>
                        </Alert>
                        <Alert bsStyle="success" id='response'>
                        <strong> User Profile added successfully </strong>
                        </Alert> 
                    </div>         
                    <div className="col-sm-2">       
                        <Button id="submit-user"  className="btn btn-primary" onClick={this.handleSubmit}> Add User </Button>
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