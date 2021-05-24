# Toledo Info
This application displays information about the city of Toledo from public APIs and RSS feeds. The weather information is provided by the [OpenWeatherMap](https://openweathermap.org)API, the tweets are provided by the Twitter API, and the news headlines are provided by the [Toledo Blade](https://www.toledoblade.com/) local news RSS feed.
 
 
## Getting Started
To start the application in the dev environment run
```
npm start
```
This will start both the client and backend server.
The backend server requires an API key from OpenWeatherMap stored in the WEATHER_API_KEY env variable and a consumer key, consumer secret, token key, and token secret stored in the TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_TOKEN_KEY, TWITTER_TOKEN_SECRET env variables.


## Built With
* The client is built with [React](https://reactjs.org/)
* The backend server is built with the [Express](https://expressjs.com/) framework
* [Axios](https://www.npmjs.com/package/axios) is used for http request
