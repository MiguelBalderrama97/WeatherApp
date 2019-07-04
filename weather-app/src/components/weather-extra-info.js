import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}% de humedad - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;