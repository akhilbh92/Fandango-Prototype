import React, {Component} from 'react';
import * as API from '../../api/API';
import {Alert, Button} from 'react-bootstrap';

class HallForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            hallName: '',
            street: '',
            city:'',
            state: '',
            zipcode: '',
            totalScreens: ''
          };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.hallId){
            document.getElementById('submit-button').innerHTML = 'Update Hall';
            document.getElementById('form-header').innerHTML = 'Edit Hall Details';
            API.getHallById(this.props.hallId).then((result)=> {
                console.log((result.data)[0]);
                let res = (result.data)[0];
                this.setState({
                    hallName: res.hall_name,
                    street: res.street,
                    city: res.city,
                    state: res.state,
                    zipcode: res.zipcode,
                    totalScreens: res.screen_nums
                });
            });
        }
    }

    handleSubmit(event){
        if(this.props.hallId){
            API.editHall(this.props.hallId,this.state.hallName, this.state.street, this.state.city, this.state.state, this.state.zipcode, 
                this.state.totalScreens).then((data)=> {
                    document.getElementById('response-message').style.display = 'block';
                });
        } else {
            API.addHall(this.state.hallName, this.state.street, this.state.city, this.state.state, this.state.zipcode, 
                this.state.totalScreens).then((data)=> {
                    document.getElementById('response-message').style.display = 'block';
                });
        }
        event.preventDefault();
    }


    render(){
        return (
            <div id="hallForm">  
            <br />
            <h3 id="form-header"> <strong> Add Hall Details </strong> </h3> 
            <form> 
            <br /><br />
                <div className= "admin-forms">
                    <div className="form-group row">
                        <label htmlFor="hallName"
                            className="col-sm-2 col-form-label label-color"><strong> Hall Name </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="hallName"
                                name="hallName"
                                value={this.state.hallName}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        hallName: event.target.value
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
                        <label htmlFor="street"
                            className="col-sm-2 col-form-label label-color"><strong> Street  </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="street"
                                name="street"
                                value={this.state.street}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        street: event.target.value
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
                            className="col-sm-2 col-form-label label-color"><strong> City  </strong></label>
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
                            className="col-sm-2 col-form-label label-color"><strong> State  </strong></label>
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
                            className="col-sm-2 col-form-label label-color"><strong> ZipCode  </strong></label>
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
                        <label htmlFor="totalScreens"
                            className="col-sm-2 col-form-label label-color"><strong> Total No. of Screens  </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="totalScreens"
                                name="totalScreens"
                                value={this.state.totalScreens}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        totalScreens: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <br /> <br />
                <div className="col-sm-3"> </div>                
                <div className="col-sm-5"> <p id='response-message'> Hall added successfully </p> </div>
                <Button id="submit-button"  className="col-sm-2 btn btn-primary" onClick={this.handleSubmit}> Add Hall </Button>
                <br /> <br />
            </form>
            </div>
        );
    }
}

export default HallForm;
