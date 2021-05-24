const express = require("express");
const router = express.Router();
const WeatherController = require('./WeatherController.js')
const NewsController = require('./NewsController')
const TwitterController = require('./TwitterController');

router.use('/news', NewsController.getNews);
router.use('/twitter', TwitterController.getTweets);
router.use('/weather/current', WeatherController.getCurrentWeather);
router.use('/weather/forecast', WeatherController.getWeatherForecast);

//Returns the Toledo local time (UTC-4:00)
router.use('/local-time', (req, res) => {
    const date = new Date();
    let hours = date.getUTCHours() - 4
    if(hours<0){
        hours+=24
    }
    res.send({ hours: hours, minutes: date.getMinutes() })
})

module.exports = router;
