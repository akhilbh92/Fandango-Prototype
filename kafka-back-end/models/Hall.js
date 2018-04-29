const Sequelize = require ('sequelize');
const db = require ('../db/mysql');
    
const Hall =  db.sequelize.define('hall', {
    hall_name: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    zipcode: {
        type: Sequelize.BIGINT
    },
    screen_nums: {
        type: Sequelize.INTEGER
    }
    });

Hall.sync();
module.exports =  Hall ;
        