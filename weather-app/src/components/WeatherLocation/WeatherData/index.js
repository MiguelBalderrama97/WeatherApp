import React from 'react';
import WeatherExtraInfo from './weather-extra-info';
import WeatherTemp from "./weather-temperature";
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDY,
} from "./../../../constants/weathers";
import "./styles.css";

const WeatherData = () => (
    <div className="WeatherDataCont" >
        <WeatherTemp temperature={20} weatherState={SUNNY}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;