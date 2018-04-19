var modelScreen = require('./../../models/Screen');


function handle_request(msg, callback){
    let condition = {};
    if(!msg.screenNum) {
        condition = {
            hall_id : msg.hall_id
        }
    } else {
        condition = {
            hall_id: msg.hall_id,
            screen_num: msg.screenNum
        }
    }
    console.log(`Incoming Query message: ${JSON.stringify(condition)}`);
    modelScreen.Screen.findAll({
        where : [condition]
    }).then((movie) => {
        callback(null, movie)
    });
}

module.exports = {
    handle_request
}