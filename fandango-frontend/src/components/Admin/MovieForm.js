import React, {Component} from 'react';
import Search from './Search';
import NavBar from './Navigation';
import AddMovieForm from './AddMovieForm'
// import * as API from '../../api/API';

class MovieForm extends Component {
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
        console.log(this.props);
        return (
            <div> 
                Movie Form Component 
                <Search group={this.state.group} placeholder='Search for Movies' />
                <NavBar />
                <AddMovieForm movieId={this.props.match.params.movieId}/> 
            </div>
        );
    }
}
  
export default MovieForm;