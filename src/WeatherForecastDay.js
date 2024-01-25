import React from "react";
import ForecastIcon from "./ForecastIcon.js"


export default function WeatherForecastDay (props) {
  
    let iconData = props.data.weather[0];
    let day = new Date(props.data.sunrise*1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = days[day.getDay()];
 
    return (
      <div>
        <div>{today}</div>
        <ForecastIcon data={iconData} />
        <div>
          <span>{Math.round(props.data.temp.max)}℃</span>
          <span>{Math.round(props.data.temp.min)}℃</span>
        </div>
        <div></div>
      </div>
    );
}
