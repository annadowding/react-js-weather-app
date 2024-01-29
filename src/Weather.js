import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import Sunrise from "./Sunrise.js";
import Sunset from "./Sunset.js";
import Forecast from "./Forecast.js";

export default function Weather () {
    const[ready, setReady] = useState(false);
    const[city, setCity]= useState("Tokyo");
    const[weather, setWeather] = useState({});

    function handleWeatherData (response) {
      console.log(response.data);
      setReady(true);
      setWeather({
      sunrise: new Date(
      (response.data.sys.sunrise + response.data.timezone) * 1000
      ),
      sunset: new Date(
      (response.data.sys.sunset + response.data.timezone) * 1000
      ),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
        });
  }

      function handleSubmit (event) {
        event.preventDefault();
        handleResponse();
      }

      function handleCityChange(event) {
        setCity(event.target.value);
      }

      function handleResponse () {
      let apiKey = "a6fba614573136180c060a15c9ad70ad";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleWeatherData);
      }

      if (ready) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <input type="search" onChange={handleCityChange} />
              <input type="submit" />
            </form>
            <div>
              <div className="weather">
                <div>{weather.city}</div>
                <FormattedDate date={weather.sunrise} />
                <Sunrise sunrise={weather.sunrise} />
                <Sunset sunset={weather.sunset} />
                <img
                  src="https://openweathermap.org/img/wn/{weather.icon}@2x.png"
                />
                <div>{Math.round(weather.temperature)}℃</div>
                <div>Humidity: {weather.humidity}%</div>
                <div>Wind: {weather.wind}km/h</div>
              </div>

              <div>
                <Forecast coordinates={weather.coordinates} />
              </div>
            </div>
          </div>
        );
      } else {
        handleResponse();
        return "Loading...";
      }
    
}
    


