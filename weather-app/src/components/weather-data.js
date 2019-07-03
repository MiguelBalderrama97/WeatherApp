import React from 'react';
import WeatherExtraInfo from './weather-extra-info';
import WeatherTemp from "./weather-temperature";

const WeatherData = () => (
    <div>
        <WeatherTemp/>
        <WeatherExtraInfo/>
    </div>
);

export default WeatherData;