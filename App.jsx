import './App.css';
import { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherData() {
    try {
      setIsLoading(true);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid= my api private api key goes here!`;
      const { data } = await axios.get(apiUrl);
      setTimeout(() => {
      setIsLoading(false)
      console.log(data);
      setWeatherData(data);
      }, 2000)
    } catch (error) {
      setIsLoading(false);
      console.error('An error has occured! ', error);
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <button onClick={fetchWeatherData}>fetch</button>
     { isLoading ? (<h1>Loading...</h1>) :
      <WeatherDisplay weatherData={weatherData} />
     }
    </div>
    
  );
}

export default App;