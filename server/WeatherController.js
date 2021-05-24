const API_KEY = process.env.WEATHER_API_KEY;
const axios = require('axios');

//Returns the current weather data from the OpenWeatherMap API
exports.getCurrentWeather = (req, res, next) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=toledo,us&units=imperial&APPID=${API_KEY}`)
        .then(response => {
            const code = response.data.weather[0].id;
            const description = response.data.weather[0].description;
            const temp = Math.round(response.data.main.temp);
            res.send({
                code: code,
                description: description,
                temp: temp
            })
        })
        .catch(error => next(error))
}

//Returns the weather forecast in 3 hour intervals for the next 24 ours
exports.getWeatherForecast = (req, res, next) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=toledo,us&units=imperial&APPID=${API_KEY}`)
        .then(response => {
            let forecast = []
            response.data.list.slice(0,8).forEach(entry => {
                const hour = new Date((entry.dt + response.data.city.timezone) * 1000).getUTCHours();
                const code = entry.weather[0].id
                const description = entry.weather[0].description;
                const temp = Math.round(entry.main.temp)
                forecast.push({
                    hour: hour,
                    code: code,
                    description: description,
                    temp: temp
                })
            })
            res.send({
                forecast: forecast
            })
        })
        .catch(error => next(error))
}