// var connection = new require('./kafka/Connection');
// var loginHandler = require('./services/registration/login')

// var registrationTopicName = 'registration_topic';
// var registrationConsumer = connection.getConsumer(registrationTopicName);

// var producer = connection.getProducer();

// registrationConsumer.on('message', function (message) {
// 	var data = JSON.parse(message.value);
// 	//{fetch the key and match the operation and call the respective API method}
// 	if (message.key == "login") {
// 		loginHandler.handle_request(data.data, function (err, res) {
// 			var payloads = [
// 				{
// 					topic: data.replyTo,
// 					messages: JSON.stringify({
// 						correlationId: data.correlationId,
// 						data: res
// 					}),
// 					partition: 0
// 				}
// 			];
// 			producer.send(payloads, function (err, data) {
// 				console.log("Producer Data : ", data);
// 			});
// 			return;
// 		});
// 	} else if (msg.key == "signup") {

// 	}

// });


var connection = new require('./kafka/Connection');

var registrationTopicName = 'registration_topic';
var consumer = connection.getConsumer('admin');

var producer = connection.getProducer();


// Add additional topic handlers
var loginHandler = require('./services/registration/login');
var addMovieHandler = require('./services/movies/addMovie');
var getMoviesHandler = require('./services/movies/getMovies');
var editMovieHandler = require('./services/movies/editMovie');
var addHallHandler = require('./services/halls/addHall');
var getHallsHandler = require('./services/halls/getHalls');
var editHallHandler = require('./services/halls/editHall');
var addScreenHandler = require('./services/screens/addScreen');
var getScreensHandler = require('./services/screens/getScreens');
var editScreenHandler = require('./services/screens/editScreen');
var addMovieScheduleHandler = require('./services/movieschedule/addMovieSchedule');
var deleteMovieScheduleHandler = require('./services/movieschedule/deleteMovieSchedule');
var getAllMovieScheduleByHallScreenDateHandler = require('./services/movieschedule/getAllMovieScheduleByHallScreenDate');

consumer.on('message', (message) => {
    console.log('Received message on Topic ');
    console.log(`Total Msg: ${JSON.stringify(message)}`)
    console.log(`data: ${message.value}`)
    var data = JSON.parse(message.value);
    let handler;
    console.log(data.data.key);
    switch (data.data.key) {
        case 'addMovie':
            handler = addMovieHandler;
            break;
        case 'getMovie':
            handler = getMoviesHandler;
            break;
        case 'addHall':
            handler = addHallHandler;
            break;
        case 'getHall':
            handler = getHallsHandler;
            break;
        case 'addScreen':
            handler = addScreenHandler;
            break;
        case 'getScreen':
            handler = getScreensHandler;
            break;
        case 'editMovie':
            handler = editMovieHandler;
            break;
        case 'editHall':
            handler = editHallHandler;
            break;
        case 'editScreen':
            handler = editScreenHandler;
            break;
        case 'addMovieSchedule':
            handler = addMovieScheduleHandler;
            break;
        case 'getMovieSchedules':
            handler = getAllMovieScheduleByHallScreenDateHandler;
            break;
        case 'deleteMovieSchedule':
            handler = deleteMovieScheduleHandler;
            break;
    }
    handler.handle_request(data.data.value, function (err, res) {
        console.log('after handle: %o', res);
        var payloads = [{
            topic: data.replyTo,
            messages: JSON.stringify({
                correlationId: data.correlationId,
                data: res
            }),
            partition: 0
        }];

        producer.send(payloads, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Data sent by Producer: ');
                console.log(data);
            }
        });
        return;
    });
});