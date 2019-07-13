import React, {Component} from 'react';
import Location from "./location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDY,
} from "./../../constants/weathers";

const data = {
    temperature: 5,
    weatherState: SUNNY,
    humidity: 10,
    wind: '10 m/s',
}

/*const WeatherLocation = ({city}) => (
    <div className="WeatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);*/

//ESTE ES UN CLASS COMPONENT, EL DE ARRIBA ES UN FUNCTIONAL COMPONENT
class WeatherLocation extends Component{
    render(){
        return(
            <div className="WeatherLocationCont">
                <Location></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

// ESTO ES LO MISMO QUE LA ARROW FUNCTION DE ARRIBA!
// function WeatherLocation(){
//     return <div>Weather Location</div>
// }

export default WeatherLocation;