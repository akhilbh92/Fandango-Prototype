import React, {Component} from 'react';
import Search from './Search';
import NavBar from './Navigation';
import HallForm from './HallForm';
import CommonHeader from '../header/CommonHeader';

class AddHallForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            group: ''
        };
    }
    componentDidMount(){
        this.setState({
            group: 'Theatres'
        })
    }
    render(){
        return (
            <div> 
                 <CommonHeader />
                <Search group={this.state.group} placeholder='Search for Theatres' />
                <NavBar />
                <HallForm /> 
            </div>
        );
    }
}

export default AddHallForm;
