import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Bar,Pie} from 'react-chartjs-2';
import * as API from  '../../api/API';

class ClicksPerPage extends Component{
    constructor(props){
        super(props);

        this.state={
            PageClicksData:{},
            MovieClicksData:{},
        };

        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

        API.clicksPerPage()
            .then((resultData) => {
                if (!!resultData.data && !!resultData.data.page_clicks && !!resultData.data.movie_clicks) {
                    const clicks_per_page = resultData.data.page_clicks;
                    let page_names = [];
                    let total_clicks = [];
                    clicks_per_page.forEach(click => {
                        page_names.push(click._id);
                        total_clicks.push(click.total_count);
                    });
                    console.log(`${JSON.stringify(page_names)}`);
                    console.log(`${JSON.stringify(total_clicks)}`);
                    this.setState({
                        PageClicksData: {
                            labels: page_names,
                            datasets:[
                                {
                                    label:'Total Clicks Per Page Dashboard',
                                    data: total_clicks,
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

                    //Handling Movie Clicks

                    const clicks_per_movie = resultData.data.movie_clicks;
                    let movie_names = [];
                    let total_clicks_movie = [];
                    clicks_per_movie.forEach(click => {
                        movie_names.push(click._id);
                        total_clicks_movie.push(click.total_count);
                    });
                    console.log(`${JSON.stringify(movie_names)}`);
                    console.log(`${JSON.stringify(total_clicks_movie)}`);
                    this.setState({
                        MovieClicksData: {
                            labels: movie_names,
                            datasets:[
                                {
                                    label:'Top 10 Movie Clicks',
                                    data: total_clicks_movie,
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
                    console.log("There are no logs entries");
                }
            });
    }

    render(){
        return(<div>
                <div>
                <Pie
                    data = {this.state.PageClicksData}
                    options = {{ maintainAspectRatio: true }} />
            </div>
            <div>
                <Pie
                    data = {this.state.MovieClicksData}
                    options = {{ maintainAspectRatio: true }} />
            </div>
            </div>
        );
    }
}

export default ClicksPerPage;