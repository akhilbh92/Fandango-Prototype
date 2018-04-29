import React, {Component} from 'react';
import Search from './Search';
import NavBar from './Navigation';
import HallForm from './HallForm';
import CommonHeader from '../header/CommonHeader';
import '../MovieHall/subheader.css';

class EditHallForm extends Component {
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
            <div className="admin-sub-header">  
                <CommonHeader />
                <NavBar />
                <Search group={this.state.group} /> 
                <HallForm hallId={this.props.match.params.hallId}/>
            </div>
        );
    }
}
  
export default EditHallForm;