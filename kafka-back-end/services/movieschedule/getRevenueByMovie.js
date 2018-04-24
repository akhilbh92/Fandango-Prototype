var moment = require('moment');
var modelMovieSchedule = require('./../../models/MovieSchedule');
var Sequelize = require('sequelize');
const db = require('../../db/mysql');


function handle_request(msg, callback) {
    console.log(`Incoming message: ${JSON.stringify(msg)}`);
    let condition = {};
    let query = "SELECT " +
        " SUM(total_price) as total_revenue, movies.movie_name, movies.id " +
        " FROM `movie_schedules` as ms JOIN" +
        " billing ON ms.id = billing.movie_schedule_id LEFT JOIN" +
        " movies ON movies.id = movie_schedules.movie_id ";
    if (msg.movie_id) {
        query = query + "WHERE ms.movie_id = " + msg.movie_id
    }
    query = query + " GROUP BY ms.movie_id;"
    console.log(`Incoming Query message:`, query);
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT })
        .then((movieRevenueList) => {
            callback(null, movieRevenueList)
        });
}

module.exports = {
    handle_request
}