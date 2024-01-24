import React from "react";


export default function FormattedSunrise (props) {
    let sunrise = props.date;
    let sunriseToday = sunrise.getDate();
    let hours = sunrise.getHours();
    if (hours < 10) {
        hours=`0${sunrise.getHours()}`
    }
    let minutes = sunrise.getMinutes();
    if (minutes <10) {
        minutes = `0${sunrise.getMinutes()}`
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let day = days[sunrise.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[sunrise.getMonth()];
    
    return (
        <div className="FormattedSunrise">
        <div>Sunrise: {hours}:{minutes}</div> 
        <div>{day} {sunriseToday} {month}</div>
        </div>
    )

    }

