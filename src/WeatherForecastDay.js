import React from "react";

export default function WeatherForecastDay (props) {
    return (
        <div>
            <div>
                {Math.round(props.data.temp.day)}℃
            </div>
        </div>
    )
}
