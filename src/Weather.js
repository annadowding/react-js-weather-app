import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js"

export default function Weather (props) {
    const[ready, setReady] = useState(false);
    const[city, setCity]= useState(props.defaultCity);
    const[weather, setWeather] = useState({});

    function handleResponse (response) {
        console.log(response.data);
        setReady(true);
        setWeather({
        date: new Date(response.data.dt*1000),
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
        wind: response.data.wind.speed,
    });
    }

    function updateCity(event) {
      event.preventDefault();
      setCity = event.target.value;
    }
    
    if (ready) {
        return (
       <div className="Weather">
         <form>
           <input type="search" onClick={updateCity}/>
           <input type="submit" />
         </form>
         <div>
           <FormattedDate date={weather.date}/>
           <div>⛅</div>
           <div>{Math.round(weather.temperature)}℃</div>
           <div>Humidity: {weather.humidity}%</div>
           <div>Wind: {weather.wind}km/h</div>
           <div>Forecast: ☀️🌦️🌥️🌤️☀️</div>
         </div>
       </div>
    
     )} else {
        let apiKey = "a6fba614573136180c060a15c9ad70ad";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return (
            "Loading..."
        )
     }
    } 
    


