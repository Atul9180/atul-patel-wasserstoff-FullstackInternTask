import React from "react";
import { getIconForWeather } from "../utils/iconUtils.js";
import { FaTemperatureHigh } from "react-icons/fa";

const ForecastDayCard = ({ time, temp, iconString, unit }) => {
  const icon = getIconForWeather(iconString);
  return (
    <div className="glassCard w-[80vw] md:w-[13rem] p-5 md:p-3 flex flex-col gap-2 md:gap-1">
      <p className="text-center font-semibold text-gray-700 mb-1">
        {new Date(time).toDateString()}
      </p>

      <div className="w-full flex justify-center items-center flex-1 gap-5 my-2">
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem]"
        />
        <p className="text-center font-bold">{iconString}</p>
      </div>

      <p className="flex justify-center items-center font-bold mt-1">
        <FaTemperatureHigh size={20} className="mx-3 text-red-800" />
        {temp}{" "}
        <span className="font-semibold">
          &deg;{unit === "metric" ? "C" : "F"}
        </span>
      </p>
    </div>
  );
};

export default ForecastDayCard;
