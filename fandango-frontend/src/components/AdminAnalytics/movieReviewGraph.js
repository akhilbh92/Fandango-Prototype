import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';
import * as API from  '../../api/API';


class MovieReviewGraph extends Component{
    constructor(props){
        super(props);

        this.state={
            Data:{}
        };
    }

    componentDidMount() {
        API.movieReviewGraphAPI()
            .then((resultData) => {
                if (!!resultData.data) {
                    const movies_data = resultData.data;
                    let movie_names = [];
                    let movie_average_rating = [];
                    movies_data.forEach(movie => {
                        movie_names.push(movie.movie_name);
                        movie_average_rating.push(movie.average_rating);
                    });
                    console.log(`${JSON.stringify(movie_names)}`);
                    console.log(`${JSON.stringify(movie_average_rating)}`);
                    this.setState({
                        Data: {
                            labels: movie_names,
                            datasets:[
                                {
                                    label:'Top Ten Movies By Revenue',
                                    data: movie_average_rating,
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
                    console.log("There are no movies in DB");
                }
            });
    }

    render(){
        return(<div>
                <Doughnut
                    data = {this.state.Data}
                    options = {{ maintainAspectRatio: true }} />
            </div>
        );
    }
}

export default MovieReviewGraph;