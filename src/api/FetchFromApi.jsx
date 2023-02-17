import axios from "axios";

const BASE_URL = "https://weatherbit-v1-mashape.p.rapidapi.com";
const options = {
  params: { lat: "35.5", lon: "-78.5" },
  headers: {
    "X-RapidAPI-Key": process.env.WEATHER_APP_KEY,
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
