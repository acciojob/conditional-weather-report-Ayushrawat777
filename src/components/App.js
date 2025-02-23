import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/App.css";

const App = () => {
  const [temperature, setTemperature] = useState(""); // Stores user input temperature
  const [conditions, setConditions] = useState(""); // Stores user input conditions
  const [weather, setWeather] = useState({ temperature: "25", conditions: "Sunny" });

  // useEffect updates weather whenever temperature or conditions change
  useEffect(() => {
    if (temperature && conditions) {
      setWeather({temperature: temperature,conditions: conditions });
    }
  }, [temperature, conditions]);

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>

      <input
        type="number"
        placeholder="Enter Temperature (°C)"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Conditions (e.g., Sunny, Rainy)"
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
      />

      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
