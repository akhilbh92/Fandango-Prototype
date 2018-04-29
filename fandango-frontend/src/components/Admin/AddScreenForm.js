import React, {Component} from 'react';
import NavBar from './Navigation';
import CommonHeader from '../header/CommonHeader';
import { DropdownButton, MenuItem, Button, Alert } from 'react-bootstrap';
import * as API from '../../api/API';

class AddScreenForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            hallName: 'select',
            screenNum: '',
            screenType: '',
            totalSeats: '',
            allHalls: [],
            hallId: '',
            maxScreenNum: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let hallJson = {};
        API.getHalls().then((result)=>{
            this.setState({
                allHalls : result.data
            })
            console.log(result.data);
        })
    }

    handleSelect(hallId, maxScreenNum){
        return ((event)=> {
            this.setState({
                hallName: event.target.innerHTML,
                hallId,
                maxScreenNum
            });
        })
    }

    handleSubmit(){
        if(this.state.maxScreenNum < this.state.screenNum){
            document.getElementById('hidden').innerHTML = 'Screen Number exceeded the Max No. of Screens in that Hall';
            document.getElementById('hidden').style.display = 'block';
            document.getElementById('response').style.display = 'none';
        } else {
            API.addScreen(this.state.hallId, this.state.screenNum, this.state.screenType, 
                this.state.totalSeats).then((result)=>{
                    console.log(result);
                    document.getElementById('response').innerHTML = result.meta.message;
                    document.getElementById('response').style.display = 'block';
                    document.getElementById('hidden').style.display = 'none';
            })
        }
    }

    render(){
        let hallsArray = this.state.allHalls;
        let hallItems;
        if(this.state.allHalls){
            hallItems = hallsArray.map((hall, index)=>{
                return (
                    <MenuItem key= {index} eventKey={index+1} onClick= {this.handleSelect(hall.id, hall.screen_nums).bind(this)}> {hall.hall_name}  </MenuItem>
                );
            });
        }
        
        return (
            <div className="screenForm"> 
                <CommonHeader />
                <NavBar />
                <form> 
                <br/> <br/>
                    <h3 id="form-header"> <strong> Add Screen Details </strong> </h3> 
                    <br/> <br/>
                    <div className="form-group row">
                            <label htmlFor="hallName"
                            className="col-sm-2 col-form-label label-color"><strong> Hall Name </strong></label>
                            <div className={'col-sm-1'}>
                            <DropdownButton className="form-control" 
                                bsStyle='primary'
                                title={this.state.hallName}
                                id={`dropdown-size-small`}
                                >
                                {
                                    this.state.allHalls && 
                                    <div>
                                    {hallItems}
                                    </div>
                                   
                                }
                            </DropdownButton>
                        </div>
                </div>
                <br />
                    <div className="AddUserForm"> 
                        <div className= "admin-forms">
                            <div className="form-group row">
                                <label htmlFor="screenNum"
                                    className="col-sm-2 col-form-label label-color"><strong> Screen Number </strong></label>
                                <div className={'col-sm-9' }>
                                    <input className="form-control"
                                        id="screenNum"
                                        name="screenNum"
                                        value={this.state.screenNum}
                                        required 
                                        onChange={(event) => {
                                            this.setState({
                                                screenNum: event.target.value
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
                        <label htmlFor="screenType"
                            className="col-sm-2 col-form-label label-color"><strong> Screen Type </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="screenType"
                                name="screenType"
                                value={this.state.screenType}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        screenType: event.target.value
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
                        <label htmlFor="totalSeats"
                            className="col-sm-2 col-form-label label-color"><strong> Total Seats </strong></label>
                        <div className={'col-sm-9' }>
                            <input className="form-control"
                                id="totalSeats"
                                name="totalSeats"
                                value={this.state.totalSeats}
                                required 
                                onChange={(event) => {
                                    this.setState({
                                        totalSeats: event.target.value
                                    });
                                }}
                                >
                            </input>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-3"> </div>                
                <div className="col-sm-5"> 
                    <Alert bsStyle="warning" className='res-msgs' id='hidden'>
                        <strong>  </strong>
                    </Alert>
                    <Alert bsStyle="success" className='res-msgs' id='response'>
                        <strong>  </strong>
                    </Alert> 
               </div>

                <Button id="submit-user"  className="col-sm-1 btn btn-primary" onClick={this.handleSubmit}> Add Screen </Button>
                <br/> <br/>
            </div>
               
            </form> 
            </div>
        );
    }
}

export default AddScreenForm;
