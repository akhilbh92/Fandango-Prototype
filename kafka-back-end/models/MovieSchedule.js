const Sequelize = require ('sequelize');
const db = require ('../db/mysql');

const MovieSchedule =  db.sequelize.define('movie_schedule', {
    movie_id: {
        type: Sequelize.INTEGER
    },
    hall_id: {
        type: Sequelize.INTEGER
    },
    screen_id: {
        type: Sequelize.INTEGER
    },
    show_date: {
        type: Sequelize.DATEONLY
    },
    show_time: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE
    },
    is_archive: {
        type: Sequelize.BOOLEAN
    }
});


module.exports = { MovieSchedule };
        