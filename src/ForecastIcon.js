import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
    sunnyIcon: 'CLEAR_DAY',
    nightIcon: 'CLEAR_NIGHT',
    partlyCloudyIcon: 'PARTLY_CLOUDY_DAY',
    cloudyIcon: 'CLOUDY',
    rainIcon: 'RAIN',
    sleetIcon: 'SLEET',
    snowIcon: 'SNOW',
    fogIcon: 'FOG',
}

export default function ForecastIcon (props) {

    if (props.data.weather[0].icon === "01d") {
      return <ReactAnimatedWeather icon={defaults.sunnyIcon} />;
    } else if (props.data.weather[0].icon === "02d") {
      return <ReactAnimatedWeather icon={defaults.partlyCloudyIcon} />;
    } else if (
      props.data.weather[0].icon === "02d" ||
      props.data.weather[0].icon === "04d"
    ) {
      return <ReactAnimatedWeather icon={defaults.cloudyIcon} />;
    } else if (
      props.data.weather[0].icon === "09d" ||
      props.data.weather[0].icon === "10d"
    ) {
      return <ReactAnimatedWeather icon={defaults.rainIcon} />;
    } else if (props.data.weather[0].icon === "11d") {
      return <ReactAnimatedWeather icon={defaults.sleetIcon} />;
    } else if (props.data.weather[0].icon === "50d") {
      return <ReactAnimatedWeather icon={defaults.fogIcon} />;
    } else {
        return <ReactAnimatedWeather icon={defaults.nightIcon} />
    }
    
}