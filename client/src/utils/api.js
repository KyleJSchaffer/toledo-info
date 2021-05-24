import axios from 'axios';

//Gets the api server root based on if the app is build in dev or production environment
const SERVER_ROOT = (process.env.NODE_ENV === 'development' ?
    'http://localhost:3001' : 'https://www.kschaffer.com/toledo-info/api');

//Fetches the twitter data, returns null if the request fail
export const getTweets = () => {
    return axios.get(`${SERVER_ROOT}/twitter`)
        .then(res => {
            return res.data.tweets
        })
        .catch(error => {
            return null
        })
}

//Fetches the current weather data, returns null if the request fails
const getCurrentWeather = () => {
    return axios.get(`${SERVER_ROOT}/weather/current`)
        .then(res => {
            return {
                code: res.data.code,
                description: res.data.description,
                temp: res.data.temp,
            }
        })
        .catch(error => {
            return null
        })
}

//Fetches the weather forecast, returns null of the request fails
const getWeatherForecast = () => {
    return axios.get(`${SERVER_ROOT}/weather/forecast`)
        .then(res => {
            return res.data.forecast
        })
        .catch(error => {
            return null
        })
}

//Calls the functions to request the current weather and the weather forecast, and returns the data in a single object
export const getWeather = () => {
    let weather = {};
    return getCurrentWeather()
        .then(currentWeather => {
            weather.currentWeather = currentWeather
            return getWeatherForecast()
                .then(forecast => {
                    weather.forecast = forecast
                    return weather
                })
        })
}

//Fetches the news data, returns null if the request fails
export const getNews = () => {
    return axios.get(`${SERVER_ROOT}/news`)
        .then(res => {
            return res.data.articles
        })
        .catch(error => {
            return null
        })
}

//Fetches the news data, returns null if the request fails
export const getLocalTime = () => {
    return axios.get(`${SERVER_ROOT}/local-time`)
        .then(res => {
            return {
                hours: res.data.hours,
                minutes: res.data.minutes
            }
        })
        .catch(error => {
            return {
                hours: null,
                minutes: null
            }
        })
}