import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Bar,Pie} from 'react-chartjs-2';
import * as API from  '../../api/API';


class TopTenHallByTicketsSold extends Component{
    constructor(props){
        super(props);

        this.state={
            Data:{}
        };
    }

    componentDidMount() {
        API.topTenHalls()
            .then((resultData) => {
                if (!!resultData.data) {
                    const halls_data = resultData.data;
                    let hall_names = [];
                    let hall_revenue = [];
                    let hall_tickets_sold = [];
                    halls_data.forEach(hall_data => {
                        hall_names.push(hall_data.hall_name);
                        hall_revenue.push(hall_data.revenue);
                        hall_tickets_sold.push(hall_data.total_no_of_tickets)
                    });
                    console.log(`${JSON.stringify(hall_names)}`);
                    console.log(`${JSON.stringify(hall_revenue)}`);
                    console.log(`${JSON.stringify(hall_tickets_sold)}`);
                    this.setState({
                        Data: {
                            labels: hall_names,
                            datasets:[
                                {
                                    label:'Top Ten Movies By Revenue',
                                    data: hall_revenue,
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
                    console.log("There are no tickets sold in last month");
                }
            });
    }

    render(){
        return(<div>
                <Pie
                    data = {this.state.Data}
                    options = {{ maintainAspectRatio: true }} />
            </div>
        );
    }
}

export default TopTenHallByTicketsSold;