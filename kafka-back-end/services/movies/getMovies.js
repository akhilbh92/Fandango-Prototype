var modelMovie = require('./../../models/Movie');

function handle_request(msg, callback){
    console.log(`Incoming message: ${JSON.stringify(msg)}`);
    modelMovie.Movie.findAll({
        where : [msg]
    }).then((movie) => {
        callback(null, movie)
    });
}

module.exports = {
    handle_request
}