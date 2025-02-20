import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/App.css"; 

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "Loading..." });

  useEffect(() => {
    // Simulating API response
    setTimeout(() => {
      setWeather({ temperature: 25, conditions: "Sunny" });
    }, 1000);
  }, []);

  return (
    <div className="app-container">
      <h1 className="title"> Weather App</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
