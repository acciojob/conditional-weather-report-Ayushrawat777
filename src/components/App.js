// App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <h1>Conditional Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
