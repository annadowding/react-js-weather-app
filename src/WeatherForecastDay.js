import React from "react";

export default function WeatherForecastDay (props) {

    let day = new Date(props.data.sunrise*1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = days[day.getDay()];
 
    return (
      <div>
        <div>{today}</div>
        <div>
          <span>{Math.round(props.data.temp.max)}℃</span>
          <span>{Math.round(props.data.temp.min)}℃</span>
        </div>
      </div>
    );
}
