import React, { Component } from 'react';
import CommonHeader from '../header/CommonHeader';
import * as API from '../../api/API';
import './moviehall.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';

class CancelBooking extends Component {

    notify = (message) => toast(message);

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            bookingId: '',
            bookingList: {}
        };
    }

    cancelUserBooking() {
        API.cancelUserBooking(this.state.bookingId)
            .then(function (resultData) {
            }).catch(error => {
                this.notify(error);
            });
    }

    searchUserBooking() {
        this.setState({ submitted: true });
        if (!!this.state.bookingId) {
            API.searchUserBooking(this.state.bookingId)
                .then(function (resultData) {
                    if (!!resultData.data) {
                        this.setState({
                            bookingList: resultData.data,
                            submitted: false
                        });
                    } else {
                        this.notify("No Booking found for given Booking ID");
                    }
                }).catch(error => {
                    this.notify(error);
                });
        }
    }

    clearSearch() {
        this.setState({
            bookingId: '',
            bookingList: [],
            submitted:false
        });
    }

    render() {
        const columns = [{
            Header: 'Booking ID',
            accessor: 'booking_id',
            style: { 'whiteSpace': 'unset' }
        }, {
            Header: 'Booking Date',
            accessor: 'booking_date',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Movie',
            accessor: 'movie_name',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Movie Hall',
            accessor: 'hall_name',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Screen Info',
            accessor: 'screen_num',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Price',
            accessor: 'price',
            style: { 'textAlign': 'right' }
        }, {
            Header: 'Action',
            accessor: 'price',
            style: { 'textAlign': 'right' },
            Cell: props => (<div><button className="btn btn-link" onClick={() => {
                this.cancelUserBooking(props.row._original.id);
            }}><span className="fas fa-trash delete-icon-btn"></span> Cancel</button></div>)
        }]

        return (
            <div>
                <CommonHeader />
                <div className=" col-md-12 page-header-container">
                    <div className="col-md-offset-2 col-md-10 pd-left-0">
                        <h2 className="schedule-page-header">Cancel User<span className="page-header-emphasis"> BOOKINGS</span></h2>
                    </div>
                </div>
                <div className="col-md-offset-2 col-md-8 preferences-view">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="searchBooking" className="col-sm-3 col-form-label booking-id-font">Enter Booking ID</label>
                            <div className={'col-sm-4 ' + (this.state.submitted && !this.state.bookingId ? ' has-error' : '')}>
                                <input type="number" id="searchBooking" name="searchBooking"
                                    className="form-control booking-input"
                                    value={this.state.bookingId}
                                    onChange={(event) => {
                                        this.setState({
                                            bookingId: event.target.value
                                        })
                                    }} />
                                {this.state.submitted && !this.state.bookingId &&
                                    <div className="help-block">Booking ID is required</div>
                                }
                            </div>
                            <div className="col-md-3">
                                <button type="button" className='btn btn-primary submit-btn booking-search' onClick={() => {
                                    this.searchUserBooking();
                                }}>
                                    Search
                                </button>
                                <button type="button" className='btn btn-default booking-search' onClick={() => {
                                    this.clearSearch();
                                }}>
                                    Clear
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.state.bookingList !== undefined && this.state.bookingList.length > 0 &&
                    <div className="col-md-offset-2 col-md-9 pd-left-0">
                        <div className="col-md-12 pd-left-0">
                            < ReactTable
                                minRows={0}
                                filterable={true}
                                pagination={false}
                                data={this.state.bookingList}
                                columns={columns} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CancelBooking;