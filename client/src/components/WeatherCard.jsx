import React from "react";
import {
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaWind,
} from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { getIconForWeather } from "../utils/iconUtils";
import { useDate } from "../hooks/useDate";

const WeatherCard = ({
  place,
  temperature,
  minTemperature,
  maxTemperature,
  windspeed,
  winddir,
  humidity,
  iconString,
  conditions,
  unit,
}) => {
  const { time } = useDate();
  const icon = getIconForWeather(iconString);

  return (
    <div className="glassCard">
      {/* Weather Icon and Temperature */}
      <div className="weather-icon-container">
        <img
          src={icon}
          alt="weather_icon"
          className={`weather-icon ${
            window.innerWidth >= 768 ? "weather-icon-md" : ""
          }`}
        />
        <p
          className={`weather-temperature ${
            window.innerWidth >= 768 ? "weather-temperature-md" : ""
          } ${window.innerWidth >= 1024 ? "weather-temperature-lg" : ""}`}
        >
          {temperature}{" "}
          <span className="unit">{unit === "metric" ? "°C" : "°F"}</span>
        </p>
      </div>

      {/* Min and Max Temperature */}
      <div className="temp-info-container">
        <p className="temp-info min">
          <FaTemperatureArrowDown className="icon" />
          Min: {minTemperature}{" "}
          <span className="unit">{unit === "metric" ? "°C" : "°F"}</span>
        </p>
        <p className="temp-info max">
          <FaTemperatureArrowUp className="icon" />
          Max: {maxTemperature}{" "}
          <span className="unit">{unit === "metric" ? "°C" : "°F"}</span>
        </p>
      </div>

      {/* Place, Date, and Time */}
      <div className="place-date-time">{place}</div>
      <div className="date-time-container">
        <p className="date-time">{new Date().toDateString()}</p>
        <p className="date-time">{time}</p>
      </div>

      {/* Wind and Humidity */}
      <div className="wind-humidity-container">
        <p className="wind-info">
          <FaWind className="icon" size={15} />
          {windspeed} {winddir}
        </p>
        <p className="humidity-info">
          <WiHumidity className="icon" size={20} />
          {humidity}
        </p>
      </div>

      {/* Weather Conditions */}
      <div
        className={`weather-conditions ${
          window.innerWidth >= 768 ? "weather-conditions-md" : ""
        } ${window.innerWidth >= 1024 ? "weather-conditions-lg" : ""}`}
      >
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
