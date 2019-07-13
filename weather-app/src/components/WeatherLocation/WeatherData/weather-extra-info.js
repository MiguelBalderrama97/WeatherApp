import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont">
        <span className="ExtraInfoText">{`Humedad: ${humidity}%`}</span>
        <span className="ExtraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humitity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;