import React, {Component} from 'react';
import * as API from '../../api/API';
import MovieSearchRevenue from './movieSearchRevenue';
import {Bar,Pie} from 'react-chartjs-2';

class CityWiseMovieRevenue extends Component {
    constructor(props){
        super(props);

        this.state={
            Data:{}
        };
    }
    componentDidMount(){
        API.getCityWiseRevenueByMovie(this.props.match.params.movieId).then((resultData)=> {
            console.log(`Data is ${JSON.stringify(resultData)}`);
            if (resultData.data) {
                const movie_city_data = resultData.data;
                let city_names = [];
                let city_revenue = [];
                movie_city_data.forEach(city => {
                    city_names.push(city.city);
                    city_revenue.push(city.average);
                });
                console.log(`${JSON.stringify(city_names)}`);
                console.log(`${JSON.stringify(city_revenue)}`);
                this.setState({
                    Data: {
                        labels: city_names,
                        datasets:[
                            {
                                label:'City Wise Revenue for a Movie',
                                data: city_revenue,
                                backgroundColor:[
                                    'rgba(255,105,145,0.6)',
                                    'rgba(155,100,210,0.6)',
                                    'rgba(90,178,255,0.6)',
                                    'rgba(240,134,67,0.6)',
                                    'rgba(120,120,120,0.6)',
                                    'rgba(250,55,197,0.6)'
                                ]
                            }
                        ]
                    }
                });
            } else {
                console.log("There are no city revenue details in DB");
            }
        })
    }

    render(){
        return(
            <div>
                <br />
                 <h3> City wise  Movie Revenue </h3>
                 <MovieSearchRevenue />
                <div>
                    <Pie
                        data = {this.state.Data}
                        options = {{ maintainAspectRatio: true }} />
                </div>
            </div>
        );
    }
}

export default CityWiseMovieRevenue;