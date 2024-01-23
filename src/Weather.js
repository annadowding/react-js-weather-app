import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather (props) {
    const [ready, setReady] = useState(false);
    // const[city, setCity]= useState(props.defaultCity);
    const[weatherData, setWeatherData] = useState(null);


    function handleResponse (response) {
        console.log(response);
        setWeatherData(response.data.temperature);
        setReady(true);
    }

    // function handleCityChange(event) {
    //   event.preventDefault();
    //   setCity = event.target.value;
    // }
    
    
    if (ready) {
        return (
       <div className="Weather">
         <form>
           <input type="search" />
           <input type="submit" />
         </form>
         <div>
           <div>⛅</div>
           <div>{weatherData}℃</div>
           <div>Description: Broken Cloud</div>
           <div>Humidity: 15%</div>
           <div>Wind: 30 km/h</div>
           <div>Forecast: ☀️🌦️🌥️🌤️☀️</div>
         </div>
       </div>
    
     )} else {
        let apiKey = "a6fba614573136180c060a15c9ad70ad";
        let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return (
            "Loading..."
        )
     }
    } 
    


