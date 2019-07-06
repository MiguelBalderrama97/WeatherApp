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

    const sizeIcon = "4x";

    if(weatherState){
        return <WeatherIcons className="wicon" name={weatherState} size={sizeIcon}/>;
    }else{
        return <WeatherIcons className="wicon" name={SUNNY} size={sizeIcon}/>;
    }
}

const WeatherTemp = ({temperature, weatherState}) => (
    <div className="WeatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">{" °C"}</span>
    </div>
);

WeatherTemp.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemp;