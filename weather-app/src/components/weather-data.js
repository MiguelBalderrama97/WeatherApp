import React from 'react';
import WeatherExtraInfo from './weather-extra-info';
import WeatherTemp from "./weather-temperature";
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from "../constants/weathers";

const WeatherData = () => (
    <div>
        <WeatherTemp temperature={28} weatherState={CLOUD}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;