import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-card">
      <p className="condition">Condition: <span>{weather.conditions}</span></p>
      <p className={`temperature ${weather.temperature > 20 ? "hot" : "cold"}`}>
         {weather.temperature}°C
      </p>
    </div>
  );
};

export default WeatherDisplay;
