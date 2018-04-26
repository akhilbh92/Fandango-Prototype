import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';
import * as API from  '../../api/API';


class TopTenMoviesByRevenue extends Component{
    constructor(props){
        super(props);

        this.state={
            Data:{}
        };
    }

    componentDidMount() {
        API.topTenMovies()
            .then((resultData) => {
                if (!!resultData.data) {
                    const movies_data = resultData.data;
                    let movie_names = [];
                    let movie_revenue = [];
                    movies_data.forEach(movie => {
                    movie_names.push(movie.movie_name);
                    movie_revenue.push(movie.revenue);
                    });
                    console.log(`${JSON.stringify(movie_names)}`);
                    console.log(`${JSON.stringify(movie_revenue)}`);
                    this.setState({
                        Data: {
                            labels: movie_names,
                            datasets:[
                                {
                                    label:'Top Ten Movies By Revenue',
                                    data: movie_revenue,
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
                <Bar
                    data = {this.state.Data}
                    options = {{ maintainAspectRatio: true }} />
            </div>
        );
    }
}

export default TopTenMoviesByRevenue;