import React from "react";

export default function Sunrise (props) {
    let sunrise = props.sunrise;
    let hours = sunrise.getHours();
    if (hours < 10) {
      hours = `0${sunrise.getHours()}`;
    }
    let minutes = sunrise.getMinutes();
    if (minutes < 10) {
      minutes = `0${sunrise.getMinutes()}`;
    }
    return (
        <div>
            Sunrise: {hours}:{minutes}        
        </div>
    );
}