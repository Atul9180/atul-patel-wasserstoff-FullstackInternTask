import React from "react";
import { getIconForWeather } from "../utils/iconUtils.js";

const ForecastDayCard = ({ time, temp, iconString, unit }) => {
  const icon = getIconForWeather(iconString);

  return (
    <div className="glassCard forecast-day-card">
      <p className="date">{new Date(time).toDateString()}</p>
      <img src={icon} alt={iconString} className="icon" />
      <p className="icon-string">{iconString}</p>
      <p className="temperature">
        {temp}{" "}
        <span className="temperature-unit">
          {unit === "metric" ? "°C" : "°F"}
        </span>
      </p>
    </div>
  );
};

export default ForecastDayCard;
