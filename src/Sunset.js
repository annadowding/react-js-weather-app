import React from "react";

export default function Sunset(props) {
  let sunset = props.sunset;
  let hours = sunset.getHours();
  if (hours < 10) {
    hours = `0${sunset.getHours()}`;
  }
  let minutes = sunset.getMinutes();
  if (minutes < 10) {
    minutes = `0${sunset.getMinutes()}`;
  }
  return (
    <div>
      Sunset: {hours}:{minutes}
    </div>
  );
}
