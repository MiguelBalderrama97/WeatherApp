import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDY,
} from "../constants/weathers";

/*const icons = {
    [CLOUD]: "jajaja",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};*/

const getWeatherIcon = (weatherState) => {
    if(weatherState){
        return <WeatherIcons name={weatherState} size="2x"/>;
    }else{
        return <WeatherIcons name={SUNNY} size="2x"/>;
    }
    
}

const WeatherTemp = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}°C`}</span>
    </div>
);

export default WeatherTemp;