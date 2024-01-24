import React from "react";


export default function FormattedDate (props) {
    let date = props.date;
    let dateToday = date.getDate();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let day = days[date.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    
    return (
        <div className="FormattedDate">
        <div>{day} {dateToday} {month}</div>
        </div>
    )

    }

