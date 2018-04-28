const ratingmodel = require('../../models/Ratings');

module.exports = {
    addRating: async function(body,cb){
        console.log(body);
        cb(null,body);
        //const rating = await ratingmodel.create(body);
    }
};