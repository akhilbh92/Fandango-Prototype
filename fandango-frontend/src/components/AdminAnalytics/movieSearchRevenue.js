import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import Search from '../Admin/Search';

class MovieSearchRevenue extends Component{
    constructor(props){
        super(props);
        this.state = {
            group: ''
        };
    }
    componentDidMount(){
        this.setState({
            group: 'Movies'
        })
    }

    render(){
        return(
            <div className='admin-elements' id='search'> 
                <br />
                <div className = "col-sm-4" > </div>
                <div className = "col-sm-8  admin-forms"> 
                    <Search group={this.state.group} placeholder='Search for a movie' forStats='true'  />
                </div>
            </div>
        );
    }
}

export default MovieSearchRevenue;