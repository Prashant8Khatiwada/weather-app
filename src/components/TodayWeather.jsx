import React from "react";
import sun from "../svg/sun.svg";
import cloud from "../svg/cloud.svg";
import rain from "../svg/rain.svg";
import cloudsun from "../svg/cloudsun.svg";
function TodayWeather() {
  return (
    <div className="weather">
      <div className="today-weather">
        <div className="today-weather-img">
          <img src={sun} />
        </div>

        <div className="today-weather-data">
          <h4>Today's</h4>
          <h1>New York</h1>
          <p>
            Temperature: <span>17 degree celcius</span>
          </p>
          <p>Clear Sky</p>
        </div>
      </div>

      <div className="other-weather">
        <div className="other-weather-info">
          <h3>Wednesday</h3>
          <div className="other-weather-img">
            <img src={sun} />
          </div>
          <p>21 degree celcius</p>
        </div>
        <div className="other-weather-info">
          <h3>Thursday</h3>
          <div className="other-weather-img">
            <img src={rain} />
          </div>
          <p>21 degree celcius</p>
        </div>
        <div className="other-weather-info">
          <h3>Friday</h3>
          <div className="other-weather-img">
            <img src={cloudsun} />
          </div>
          <p>21 degree celcius</p>
        </div>
        <div className="other-weather-info">
          <h3>Saturday</h3>
          <div className="other-weather-img">
            <img src={cloud} />
          </div>
          <p>21 degree celcius</p>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
