import React from 'react';
import WeatherExtraInfo from './weather-extra-info';
import WeatherTemp from "./weather-temperature";

const WeatherData = () => (
    <div>
        <WeatherTemp temperature={20} weatherState={'sunny'}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;