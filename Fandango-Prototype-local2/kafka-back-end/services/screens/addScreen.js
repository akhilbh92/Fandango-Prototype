var modelScreen = require('./../../models/Screen');

function handle_request(msg, callback){
    console.log(`Handle request: ${msg}`);
    // force: true will drop the table if it already exists
    modelScreen.Screen.sync({force: false}).then(() => {
        // Table created
        return modelScreen.Screen.create({
        hall_id: msg.hall_id,
        screen_num: msg.screen_num,
        screen_type: msg.screen_type,
        total_seats: msg.total_seats
        });
    }).then(() => {
        let result= {};
        result.message = 'Screen added to the theatre';
        callback(null, result);
    });
}

module.exports = {
    handle_request
}