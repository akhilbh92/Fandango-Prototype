const ratingmodel = require('../../models/Ratings');

module.exports = {
    addRating: async function(body,cb) {
        try {
            const rating = await ratingmodel.create(body);
            cb(null, true)
        } catch (err) {
            cb(err, null)
        }
    }
};