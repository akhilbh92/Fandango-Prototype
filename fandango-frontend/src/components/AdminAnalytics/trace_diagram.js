import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import * as API from '../../api/API';
import '../MovieHall/moviehall.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import {Line,Bar} from 'react-chartjs-2';

class TraceDiagram extends Component {

    notify = (message) => toast(message);

    constructor(props) {
        super(props);

        this.state = {
            pages_list_data: [],
            user_id: "test@gmail.com"
        };
    }
    componentDidMount() {
        API.getTraceDiagram({user_id:this.state.user_id})
            .then((resultData) => {
                if (!!resultData.data) {
                    const pages_data = resultData.data.pages;
                    let page_index = [];
                    let page_array = [];
                    pages_data.forEach((page_seq,index) => {
                        page_index.push(++index);
                        switch (page_seq){
                            case 'allmovies':
                                page_array.push(1);
                                break;
                            case 'moviedetail':
                                page_array.push(2);
                                break;
                            case 'movieoverview':
                                page_array.push(3);
                                break;
                            case 'signup':
                                page_array.push(4);
                                break;
                            case 'login':
                                page_array.push(5);
                                break;
                        }
                        //page_array.push(page_seq);
                    });
                    console.log(`${JSON.stringify(page_index)}`);
                    console.log(`${JSON.stringify(page_array)}`);
                    this.setState({
                        pages_list_data: {
                            labels: page_index,
                            datasets:[
                                {
                                    label:'Total Clicks Per Page Dashboard',
                                    data: page_array,
/*                                    backgroundColor:[
                                        'rgba(255,105,145,0.6)',
                                        'rgba(155,100,210,0.6)',
                                        'rgba(90,178,255,0.6)',
                                        'rgba(240,134,67,0.6)',
                                        'rgba(120,120,120,0.6)',
                                        'rgba(250,55,197,0.6)'
                                    ]*/
                                }
                            ]
                        }
                    });
                } else {
                    console.log("No Data for trace Available for the user");
                }
            }).catch(error => {
            this.notify(error);
        });
    }


    render() {
        return(<div>
            <Line
                data = {this.state.pages_list_data}
                options={{
                    maintainAspectRatio:false,
                legend: {
                    position: 'bottom',
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Navigation Flow of the User'
                        },
                        ticks: {
                            autoSkip: true,
                            stepSize: 1,
                            min: 0,
                            max: 100
                        }}],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Page Names'
                        },
                        ticks: {
                            min: 0,
                            max: 5,
                            stepSize: 1,
                            suggestedMin: 0.5,
                            suggestedMax: 5.5,
                            callback: function (label, index, labels) {
                                switch (label) {
                                    case 0:
                                        return 'home';
                                    case 1:
                                        return 'allmovies';
                                    case 2:
                                        return 'moviedetail';
                                    case 3:
                                        return 'movieoverview';
                                    case 4:
                                        return 'signup';
                                    case 5:
                                        return 'login';
                                }
                            }
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }}/>
        </div>)
    }
}


export default TraceDiagram;