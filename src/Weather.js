import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather (props) {
    const[ready, setReady] = useState(false);
    const[city, setCity]= useState(props.defaultCity);
    const[temperature, setTemperature] = useState({});

    function handleResponse (response) {
        console.log(response.data);
        setReady(true);
        setTemperature(response.data.main.temp);
    }

    function changeCity(event) {
      event.preventDefault();
      setCity = event.target.value;

    }
    
    if (ready) {
        return (
       <div className="Weather">
         <form>
           <input type="search" onChange={changeCity}/>
           <input type="submit" />
         </form>
         <div>
           <div>⛅</div>
           <div>{Math.round(temperature)}℃</div>
           <div>Humidity: 7%</div>
           <div>Wind: 30 km/h</div>
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
    


