import React from 'react';
import Location from "./location";
import WeatherData from "./WeatherData";

const WeatherLocation = () => (
    <div>
        <Location city="Chihuahua"></Location>
        <WeatherData></WeatherData>
    </div>
);

// ESTO ES LO MISMO QUE LA ARROW FUNCTION DE ARRIBA!
// function WeatherLocation(){
//     return <div>Weather Location</div>
// }

export default WeatherLocation;