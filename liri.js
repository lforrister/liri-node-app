var tweeter = process.argv[2];


if (tweeter === "my-tweets") {
var twitter = require("twitter");


var client = new twitter({
  consumer_key: 'aRxGjkH7H7pIsSaMNQwiOB8P6',
  consumer_secret: 'xQj4uD4XjnJ7a5HFvLnd6RMUXvkwsztMC2C94pHHQnNrtAcijQ',
  access_token_key: '883337941610901504-3PQ28R9bVheCT03hxTJfRkX0e8q8RdT',
  access_token_secret: 'E8zkkBntWeUzM8F7QKYNm9OYHMNYHjrMWzjqVgO9Gwa2V',
});



var params = {screen_name: 'linds948'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	console.log("Tweet: ");
    console.log(tweets);
  }
});

};

