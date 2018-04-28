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

//
var connection = new require('./kafka/Connection');

var registrationTopicName = 'registration_topic';


var producer = connection.getProducer();


// Add additional topic handlers
var loginHandler = require('./services/users/index');
var addMovieHandler = require('./services/movies/addMovie');
var getMoviesHandler = require('./services/movies/getMovies');
var editMovieHandler = require('./services/movies/editMovie');
var addHallHandler = require('./services/halls/addHall');
var getHallsHandler = require('./services/halls/getHalls');
var editHallHandler = require('./services/halls/editHall');
var addScreenHandler = require('./services/screens/addScreen');
var getScreensHandler = require('./services/screens/getScreens');
var editScreenHandler = require('./services/screens/editScreen');
var getLimitedMoviesHandler = require('./services/movies/getLimitedMovies');
var addMovieScheduleHandler = require('./services/movieschedule/addMovieSchedule');
var deleteMovieScheduleHandler = require('./services/movieschedule/deleteMovieSchedule');
var getAllMovieScheduleByHallScreenDateHandler = require('./services/movieschedule/getAllMovieScheduleByHallScreenDate');
var getRevenueByMovieHandler = require('./services/movieschedule/getRevenueByMovie');
var cancelBookingHandler = require('./services/movieschedule/cancelBooking');
var searchBookingHandler = require('./services/movieschedule/searchBooking');
var topTenMoviesByRevenue = require('./services/adminanalytics/topTenMoviesByRevenue');
var cityWiseMovieRevenue = require('./services/adminanalytics/cityWiseMovieRevenue');
var topTenHallByTickets = require('./services/adminanalytics/topTenHallByTickets');



/*************************************************************************************/

// Handle OffsetOutOfRange Error

var kafka = require('kafka-node');
var Client = kafka.Client;
var Offset = kafka.Offset;
var client = new Client('localhost:2181');
var offset = new Offset(client);
var consumer = connection.getConsumer('admin');

let topic = 'admin';

consumer.on('error', function (err) {
    console.log(`Error: ${err}`);
})
consumer.on('offsetOutOfRange', function (topic) {
    console.log('offsetOutOfRange Error')
    topic.maxNum = 2;
    offset.fetch([topic], function (err, offsets) {
      if (err) {
        return console.error(err);
      }
      var min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
      consumer.setOffset(topic.topic, topic.partition, min);
    });
  });

/*************************************************************************************/


consumer.on('message', (message) => {
    console.log('Received message on Topic ');
    console.log(`Total Msg: ${JSON.stringify(message)}`);
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
        case 'getLimitedMovie':
            handler = getLimitedMoviesHandler;
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
        case 'getRevenueByMovie':
            handler = getRevenueByMovieHandler;
            break;
        case 'cancelBooking':
            handler = cancelBookingHandler;
            break;
        case 'searchBooking':
            handler = searchBookingHandler;
            break;
        case 'topTenMoviesByRevenue':
            handler = topTenMoviesByRevenue;
            break;
        case 'cityWiseMovieRevenue':
            handler = cityWiseMovieRevenue;
            break;
        case 'topTenHallByTickets':
            handler = topTenHallByTickets;
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

//Consumer for users services
const userServiceConsumer = connection.getConsumer('request');
const userService = require('./services/users');

userServiceConsumer.on('message', (message) => {
    console.log(`Total Msg: ${JSON.stringify(message)}`);
    console.log(`data: ${message.value}`);
    const data = JSON.parse(message.value);

    userService[data.data.key](data.data.value, function (err, res) {
        console.log('after handle: %o', res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];

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
