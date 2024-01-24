import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import Sunrise from "./Sunrise.js";
import Sunset from "./Sunset.js";

export default function Weather (props) {
    const[ready, setReady] = useState(false);
    const[city, setCity]= useState(props.defaultCity);
    const[weather, setWeather] = useState({});

    function handleWeatherData (response) {
      console.log(response.data);
      setReady(true);
      setWeather({
      date: new Date(response.data.dt * 1000),
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
            <div>{weather.city}</div>
            <FormattedDate date={weather.date} />
            <Sunrise sunrise={weather.sunrise} />
            <Sunset sunset={weather.sunset} />
            <div>⛅</div>
            <div>{Math.round(weather.temperature)}℃</div>
            <div>Humidity: {weather.humidity}%</div>
            <div>Wind: {weather.wind}km/h</div>
            <div>Forecast: ☀️🌦️🌥️🌤️☀️</div>
          </div>
        </div>
      );
  } else {
handleResponse();
        return (
            "Loading..."
        )
        
     }
    
}
    


