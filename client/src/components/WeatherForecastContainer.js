import React from 'react';
import { getWeather } from '../utils/api';
import { getWeatherIconPath } from '../utils/weatherIconPaths';
import WeatherCard from './WeatherCard';
import FetchingMessage from './FetchingMessage';
import ErrorMessage from './ErrorMessage';

class WeatherForecastConainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentWeather: {},
            forecast: [],
            fetchingData: true
        }
    }

    //Fetches the weather data upon mounting
    componentDidMount() {
        getWeather()
            .then(weather => {
                this.setState({
                    currentWeather: weather.currentWeather,
                    forecast: weather.forecast,
                    fetchingData: false,
                })
            })
    }

    //Converts the 24 hour militiary time into 12 hour hh AM/PM format
    getTimeString(hour) {
        let timeString = hour % 12;
        if (timeString === 0) {
            timeString = 12;
        }
        if (hour < 12) {
            timeString += ' AM';
        } else {
            timeString += ' PM';
        }
        return timeString
    }

    //Renders a message while fetching data, an error message if the data failed to fetch,
    //or the WeatherCard components if the data was successfully fetched
    render() {
        if (this.state.fetchingData) {
            return <FetchingMessage dataName='Weather'/>
        } else if (!this.state.currentWeather || !this.state.forecast) {
            return <ErrorMessage  dataName='Weather'/>
        } else {
            return (
                //Renders a WeatherCard component for the current weather and for each time slot in forecast data
                <div>
                    <WeatherCard title='Now' weather={this.state.currentWeather}
                        iconName={getWeatherIconPath(this.state.currentWeather.code)} />
                    {this.state.forecast.map((weather, index) => (
                        <WeatherCard key={index} title={this.getTimeString(weather.hour)} weather={weather}
                            iconName={getWeatherIconPath(weather.code)} />
                    ))}
                </div>
            )
        }
    }
}

export default WeatherForecastConainer;