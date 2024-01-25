import React from "react";
import axios from "axios";

export default function Forecast (props) {

    function handleResponse (response) {
        console.log(response);
    }


    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); 

    return (
        <div>
            <div>
                Mon
            </div>
            <div>
                ☀️
            </div>
            <div>
                27℃
            </div>
        </div>
    )
}