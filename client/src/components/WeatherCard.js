import React from 'react';
import PropTypes from 'prop-types'
import '../css/weatherCard.css';

//Renders a weather icon along with the provided weather data 
const WeatherCard = props =>
    <div className='weather-card' >
        <h3>{props.title}</h3>
        <img className='weather-icon' src={require(`../icons/${props.iconName}`)} alt='' />
        <p>{props.weather.description}</p>
        <p>Temp: {props.weather.temp}°F</p>
    </div>

export default WeatherCard;

WeatherCard.propTypes = {
    title: PropTypes.string,
    weather: PropTypes.shape({
        description: PropTypes.string,
        temp: PropTypes.number,
    }),
    iconPath: PropTypes.string
}
