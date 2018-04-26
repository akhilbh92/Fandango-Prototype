var moment = require('moment');
var modelMovieSchedule = require('./../../models/MovieSchedule');
var Sequelize = require('sequelize');
const db = require('../../db/mysql');


function handle_request(msg, callback) {
    console.log(`Incoming message: ${JSON.stringify(msg)}`);
    let condition = {};
    let query = "SELECT " +
        " billings.bill_id,billings.total_price,billings.booking_date,billings.no_of_seats," +
        "movies.movie_name,halls.hall_name,halls.city,halls.state,halls.street," +
        "users.first_name,users.last_name " +
        " FROM  billings LEFT JOIN " +
        " users ON users.userId = billings.bill_id JOIN " +
        " movie_schedules ON movie_schedules.id = billings.movie_schedule_id JOIN " +
        " movies ON movies.id = movie_schedules.movie_id JOIN " +
        " halls ON halls.id = movie_schedules.hall_id JOIN ";
    if (msg.bill_id) {
        query = query + "WHERE billings.status='A' AND billings.bill_id LIKE CONCAT(" + msg.bill_id + ", '%');"
    } else if (msg.bill_date) {
        query = query + "WHERE billings.status='A' AND DATE(booking_date) = '" + msg.bill_date + "';"
    } else if (msg.bill_month) {
        query = query + "WHERE billings.status='A' AND MONTH(booking_date) = '" + msg.bill_month + "';"
    }
    console.log(`Incoming Query message:`, query);
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT })
        .then((billingList) => {
            callback(null, billingList)
        });
}

module.exports = {
    handle_request
}