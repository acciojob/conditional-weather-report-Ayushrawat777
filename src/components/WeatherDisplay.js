import React from "react";
function WeatherDisplay({ weatherData }) {
  const { temperature, conditions } = weatherData;
  const temperatureColor = temperature > 20 ? 'rgb(255, 0, 0)' : 'blue';
  return (
    <span>
      <p style={{ color: temperatureColor }}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </span>
  );
}

export default WeatherDisplay;
