import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
  params: {lat: '35.5', lon: '-78.5'},
  headers: {
    'X-RapidAPI-Key': process.env.WEATHER_APP_KEY,
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});