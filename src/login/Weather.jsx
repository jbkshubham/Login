import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YOUR_LOCATION'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { location, current } = weatherData;

  return (
    <div>
      <h2>Current Weather</h2>
      <h3>{location.name}</h3>
      <p>{moment(current.last_updated).format('LLL')}</p>
      <p>{current.temp_c}°C</p>
      <img src={current.condition.icon} alt={current.condition.text} />
      <p>{current.condition.text}</p>
    </div>
  );
};

export default Weather;
