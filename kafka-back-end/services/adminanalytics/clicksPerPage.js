var moment = require('moment');

// Add MongoDB connections
const MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:54000/fandango';

var clicksPerPageCollection;
MongoClient.connect(mongoURL, function (err, db) {
    if(err) {
        console.log("Unable to connect to MongoDB");
    } else {
        console.log("Connected to MongoDB");
        clicksPerPageCollection = db.collection('clicksPerPage');
        //postProjectCollection = db.collection('project');
    }
});

function handle_request(msg, callback) {
    console.log(`Incoming message: ${JSON.stringify(msg)}`);

/*    clicksPerPageCollection.drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection fandango deleted successfully");
    });*/
    clicksPerPageCollection.remove({}, {w:1}, function(err, res) {
        if(err) {
            console.log("error while removing the logs");
            callback(err,null);
        } else {
            var page_clicks=[],movie_clicks=[];
            if (msg.clickData){
                console.log("Inside the if msg is not undefined");
                console.log(msg.clickData);
                clicksPerPageCollection.insert(msg.clickData)
                    .then(function () {
                        clicksPerPageCollection.aggregate([{$match:{event:"page_click"}},
                                {$group: {_id:"$page_name",total_count:{$sum:1}}}],
                            function(err, result1) {
                            if(err) {
                                callback(err,null);
                                return;
                            }
                                console.log(result1);
                                clicksPerPageCollection.aggregate([{$match:{event:"movie_click"}},
                                        {$group: {_id:"$movie_name",total_count:{$sum:1}}}],
                                    function(err, result2) {
                                        if(err) {
                                            callback(err,null);
                                            return;
                                        }
                                        console.log(result2);
                                        //callback(null, result);
                                        callback(null, {"page_clicks":result1,"movie_clicks":result2});
                                    });
                            });
                    })
                    .then(function (res) {
                        console.log(res);
                        //callback(null, {"page_clicks":page_clicks,"movie_clicks":movie_clicks});
                    });
            }
        }
    });

    /*if (msg.clickData){
        console.log("Inside the if msg is not undefined");
        console.log(msg.clickData);
        clicksPerPageCollection.insert(msg.clickData)
            .then(function () {
                clicksPerPageCollection.aggregate([{$match:{event:"page_click"}},
                    {$group: {_id:"$page_name",total_count:{$sum:1}}}],
                    function(err, result) {
                    console.log(result);
                    callback(null, result);

                    });
                //callback(null, "log data processed successfully");
            })
            .then(function (res) {
                console.log(res);
            });
    }*/
}

module.exports = {
    handle_request
};