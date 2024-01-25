import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";
import ForecastIcon from "./ForecastIcon.js";

export default function Forecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        console.log(response);
        setLoaded(true);
        setForecast(response.data.daily);
    
    }

function load () {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); 
}

if (loaded) {
    return (
        <div>
            <div>
                {forecast.map(function(forecastDay, index) {
                    if (index < 5) {
                    return (
                      <div>
                        <div key={index}>
                          <WeatherForecastDay data={forecastDay} />
                          <ForecastIcon data={forecastDay} />
                        </div>
                      </div>
                    );
                    }else {
                        return(null);
                    }
                })} 
                
            </div>
        </div>
    )
} else {
    load();
    return null;
}
}