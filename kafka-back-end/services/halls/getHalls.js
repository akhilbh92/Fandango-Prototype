var modelHall = require('./../../models/Hall');

function handle_request(msg, callback){
    modelHall.Hall.findAll({
        where : [msg]
    }).then((hall) => {
        callback(null, hall)
    })
}

module.exports = {
    handle_request
}