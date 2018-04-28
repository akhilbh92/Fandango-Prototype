import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Bar,Pie} from 'react-chartjs-2';
import * as API from  '../../api/API';
import log4javascript from 'log4javascript';
var log1 = log4javascript.getLogger();


class ClicksPerPage extends Component{
    constructor(props){
        super(props);

        this.state={
            Data:{}
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var ajaxAppender = new log4javascript.AjaxAppender('http://localhost:3001/api/logger');
        //ajaxAppender.setBatchSize(1); // send in batches of 10
        ajaxAppender.setTimed(true);
        ajaxAppender.setTimerInterval(1000); // send every 1 seconds (unit is milliseconds)
        ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
        log1.addAppender(ajaxAppender);

        API.clicksPerPage()
            .then((resultData) => {
                if (!!resultData.data) {
                    const clicks_per_page = resultData.data;
                    let page_names = [];
                    let total_clicks = [];
                    clicks_per_page.forEach(click => {
                        page_names.push(click._id);
                        total_clicks.push(click.total_count);
                    });
                    console.log(`${JSON.stringify(page_names)}`);
                    console.log(`${JSON.stringify(total_clicks)}`);
                    this.setState({
                        Data: {
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
                } else {
                    console.log("There are no clicks per page");
                }
            });
    }

    handleClick() {
        log1.info('{"event":"page_click","page_name":"ClicksPerPage","count":"1"}');
    }

    render(){
        return(<div onClick={this.handleClick}>
                <Pie
                    data = {this.state.Data}
                    options = {{ maintainAspectRatio: true }} />
            </div>
        );
    }
}

export default ClicksPerPage;