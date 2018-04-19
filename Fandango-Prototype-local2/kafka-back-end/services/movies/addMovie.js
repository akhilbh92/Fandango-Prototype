var modelMovie = require('./../../models/Movie');

function handle_request(msg, callback){
    console.log(`Handle request: ${msg}`);
    // force: true will drop the table if it already exists
    modelMovie.Movie.sync({force: false}).then(() => {
        // Table created
        return modelMovie.Movie.create({
        movie_name: msg.movie_name,
        description: msg.description,
        genres: msg.genres
        });
    }).then(() => {
        let result= {};
        result.message = 'Movie added';
        callback(null, result);
    });
}

module.exports = {
    handle_request
}