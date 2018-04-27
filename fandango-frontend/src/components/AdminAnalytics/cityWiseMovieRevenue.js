import React, {Component} from 'react';
import * as API from '../../api/API';
import MovieSearchRevenue from './movieSearchRevenue';

class CityWiseMovieRevenue extends Component {    
    componentDidMount(){
        API.getCityWiseRevenueByMovie(this.props.match.params.movieId).then((res)=> {
            console.log(res);
        })
    }

    render(){
        return(
            <div>
                <br />
                 <h3> City wise  Movie Revenue </h3>
                 <MovieSearchRevenue />
            </div>
        );
    }
}

export default CityWiseMovieRevenue;