var connection = new require('./kafka/Connection');
var loginHandler = require('./services/registration/login')

var registrationTopicName = 'registration_topic';
var registrationConsumer = connection.getConsumer(registrationTopicName);

var producer = connection.getProducer();

registrationConsumer.on('message', function (message) {
	var data = JSON.parse(message.value);
	//{fetch the key and match the operation and call the respective API method}
	if (message.key == "login") {
		loginHandler.handle_request(data.data, function (err, res) {
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
				console.log("Producer Data : ", data);
			});
			return;
		});
	} else if (msg.key == "signup") {

	}

});