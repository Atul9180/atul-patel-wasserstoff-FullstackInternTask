import React, { createContext, useContext, useState } from "react";
import useWeatherApi from "../hooks/useWeatherApi";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const url = import.meta.env.VITE_WEATHER_BASE_URL;
  const API = import.meta.env.VITE_API_KEY;

  const [place, setPlace] = useState("Delhi"); // Default city on initial load
  const {
    isLoading,
    weather,
    forecastData,
    location,
    unit,
    setUnit,
    temperatureData,
  } = useWeatherApi(url, API, place);

  return (
    <StateContext.Provider
      value={{
        isLoading,
        weather,
        forecastData,
        location,
        unit,
        setUnit,
        temperatureData,
        setPlace,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
