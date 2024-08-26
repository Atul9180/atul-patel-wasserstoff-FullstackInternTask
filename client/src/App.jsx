import React from "react";
import { useStateContext } from "./context/StateContext";
import { WeatherCard, ForecastDayCard, Navbar } from "./components";
import "./App.css";

const App = () => {
  const { weather, location, forecastData, temperatureData, unit } =
    useStateContext();

  return (
    <div className="full-screen-container">
      <Navbar /> {/* Use the Navbar component */}
      <div className="main-content">
        {/* Current city weather card container */}
        <div className="weather-card-container">
          <WeatherCard
            place={location}
            temperature={temperatureData.currentDayTemp}
            maxTemperature={temperatureData.currentDayMaxTemp}
            minTemperature={temperatureData.currentDayMinTemp}
            windspeed={weather.wspd}
            winddir={weather.wdir}
            humidity={weather.humidity}
            iconString={weather.conditions}
            conditions={weather.conditions}
            unit={unit}
          />
        </div>

        {/* 5-day forecast cards */}
        <div className="forecast-container">
          {forecastData?.slice(1, 6).map((curr) => (
            <ForecastDayCard
              key={curr.datetime}
              time={curr.datetime}
              temp={temperatureData.forecastTemps[forecastData.indexOf(curr)]}
              iconString={curr.conditions}
              unit={unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
