import React from 'react';
import '../css/app.css'
import NewsFeedContainer from './NewsFeedContainer';
import TwitterFeedContainer from './TwitterFeedContainer';
import WeatherForecastConainer from './WeatherForecastContainer';
import LocalTimeContainer from './LocalTimeContainer';

function App() {
  return (
    <div>
      <div className='local-time-container'>
        <LocalTimeContainer />
      </div>
      <h1 className='page-title'>Toledo Info</h1>
      <div className='weather-forecast-container'>
        <h2>Weather Forecast</h2>
        <WeatherForecastConainer />
      </div>
      <div className='news-feed-container'>
        <NewsFeedContainer />
      </div>
      <div className='twitter-feed-container'>
        <TwitterFeedContainer />
      </div>
    </div>
  );
}

export default App;
