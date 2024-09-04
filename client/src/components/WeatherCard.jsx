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
  feelsLikeTemp,
}) => {
  const { time } = useDate();
  const icon = getIconForWeather(iconString);

  return (
    <div className="glassCard w-full md:w-[40%] p-4 border border-red-700">
      {/* Weather Icon and Temperature */}
      <div className="flex w-full justify-center items-center gap-8 my-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center text-slate-600">
          {temperature}
          <span className="unit">&deg;{unit === "metric" ? "C" : "F"}</span>
        </p>
      </div>

      {/* place name */}
      <div className="font-bold text-center text-4xl mt-5 mb-2 text-slate-800">
        {place}
      </div>

      {/*  Date, and Time */}
      <div className="w-full flex justify-center items-center text-center pt-2 p-3 font-semibold shadow-lg rounded-lg my-3">
        <p className="flex-1 ">{new Date().toDateString()}</p>
        <p className="flex-1 ">{time}</p>
      </div>

      {/* Min and Max Temperature */}
      <div className="w-full flex flex-wrap justify-between items-center p-3 font-bold text-gray-800">
        <p className="flex items-center gap-1">
          <FaTemperatureArrowDown className="text-blue-500" />
          Min: {minTemperature}
          <span className="unit">&deg;{unit === "metric" ? "C" : "F"}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaTemperatureArrowUp className="text-orange-500" />
          Max: {maxTemperature}
          <span className="unit">&deg;{unit === "metric" ? "C" : "F"}</span>
        </p>
      </div>

      {/* Wind and Humidity */}
      <div className="w-full md:flex justify-center items-center my-4 md:gap-6">
        {/* wind speed */}
        <div className=" shadow-lg flex justify-center items-center  p-3 font-bold bg-[#81D4FA]  rounded-lg ">
          <p className="flex items-center gap-2">
            <FaWind size={20} />
            <span className="font-bold">Wind Speed {windspeed}km/h</span>
          </p>
        </div>
        {/* humidity */}
        <div className=" shadow-lg flex justify-center items-center  p-3  font-bold bg-[#009688] rounded-lg mt-5 md:mt-0 ">
          <p className="flex items-center gap-2">
            <WiHumidity size={20} />
            <span className="font-bold">Humidity {humidity}gm/m&#179;</span>
          </p>
        </div>
      </div>

      {/* heatIndex */}
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Feels Like</p>
        <p className="text-lg">
          {feelsLikeTemp ? feelsLikeTemp : "N/A"}
          <span className="unit">&deg;{unit === "metric" ? "C" : "F"}</span>
        </p>
      </div>

      {/* Weather Conditions */}
      <hr className="bg-slate-600 mb-2 h-[2px]" />
      <div className="w-full p-2 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
