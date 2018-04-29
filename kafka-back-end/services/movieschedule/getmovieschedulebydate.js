const movie_schedules = require('../../models/MovieSchedule').MovieSchedule;

module.exports = {
    getmovieschedulebydate: function (body,cb) {
        const movie_id = body.movie_id;
        const show_date = body.show_date;

        let sql = "select hall_name,street,city,state,zipcode,hall_id,price,show_time,screen_id " +
            "from movie_schedules AS T1 INNER JOIN halls AS T2 ON T1.hall_id = T2.id " +
            "where show_date = '<date>' and movie_id = <movieid> ORDER BY hall_id ASC";
        sql = sql.replace('<date>', show_date).replace('<movieid>', movie_id);

        try{
            movie_schedules.sequelize.query(sql).spread((results, metadata) => {
                    cb(null,results);
            });
        }catch (err) {
            cb(err,null);
        }
    }
};