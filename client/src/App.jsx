import React from "react";
import { useStateContext } from "./context/StateContext";
import {
  BackgroundScreenImages,
  WeatherCard,
  ForecastDayCard,
  Navbar,
} from "./components";
import "./App.css";

const App = () => {
  const { weather, location, forecastData, temperatureData, unit } =
    useStateContext();
  return (
    <div className="w-full h-full py-1 px-3 ">
      <Navbar /> {/* Use the Navbar component */}
      {/* Background if want */}
      <BackgroundScreenImages />
      <main className=" w-full flex flex-wrap gap-8  items-center justify-center py-4">
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
          feelsLikeTemp={temperatureData.currentDayFeelsLikeTemp}
        />

        {/* 5-day forecast cards */}
        <div className=" flex justify-center gap-5 flex-wrap w-full md:w-[50vw] ">
          {forecastData?.slice(1, 6).map((curr) => (
            <ForecastDayCard
              key={curr.datetime}
              time={curr.datetimeStr}
              temp={temperatureData.forecastTemps[forecastData.indexOf(curr)]}
              iconString={curr.conditions}
              unit={unit}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
