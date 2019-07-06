import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDY,
} from "./../../../constants/weathers";
import "./styles.css";

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
    <div className="WeatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}°C`}</span>
    </div>
);

WeatherTemp.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemp;