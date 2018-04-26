import React, {Component} from 'react';
import Search from './Search';
import NavBar from './Navigation';

class HallForm extends Component {
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
                Hall Form Component 
                <Search group={this.state.group} /> 
                <NavBar />
            </div>
        );
    }
}
  
export default HallForm;