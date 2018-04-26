import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import * as API from '../../api/API';
import './moviehall.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';

class RevenueByMovie extends Component {

    notify = (message) => toast(message);

    constructor(props) {
        super(props);

        this.state = {
            revenueMovieList: []
        };
    }
    componentDidMount() {
        API.getRevenueByMovie()
            .then((resultData) => {
                if (!!resultData.data) {
                    this.setState({
                        revenueMovieList: resultData.data
                    });
                } else {
                    console.log("No Movies Available");
                }
            }).catch(error => {
                this.notify(error);
            });
    }

    render() {
        const columns = [{
            Header: 'Poster',
            accessor: 'photos',
            style: { 'whiteSpace': 'unset' }
        }, {
            Header: 'Movie Name',
            accessor: 'movie_name',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Release Date',
            accessor: 'release_date',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Total Revenue',
            accessor: 'hall_name',
            style: { 'textAlign': 'right' }
        }]

        return (
            <div>
                <CommonHeader />
                <div className=" col-md-12 page-header-container">
                    <div className="col-md-offset-2 col-md-10 pd-left-0">
                        <h2 className="schedule-page-header">Total Revenue List of <span className="page-header-emphasis"> MOVIES</span></h2>
                    </div>
                </div>
                <div className="col-md-offset-2 col-md-9 pd-left-0">
                    <div className="col-md-12 pd-left-0">
                        < ReactTable
                            minRows={0}
                            filterable={true}
                            pagination={false}
                            data={this.state.revenueMovieList}
                            columns={columns} />
                    </div>
                </div>
            </div>
        )
    }

}

export default RevenueByMovie;