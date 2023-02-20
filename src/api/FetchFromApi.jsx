import axios from "axios";

// const frontUrl = process.env.BASE_URL;
const frontUrl = `https://api.openweathermap.org/data/2.5/weather`;
// const backUrl = process.env.BACK_URL;
const backUrl = "&units=metric&appid=1bf779b770c0a107b0cce8a6eec0f09c";

export const getData = async (data) => {
  const queries = `?q=${data}`;
  const url = frontUrl + queries + backUrl ;
  const response = await axios.get(url);
  return response;
};


