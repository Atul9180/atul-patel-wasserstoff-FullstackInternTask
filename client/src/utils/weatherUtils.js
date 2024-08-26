import axios from "axios";
import { toast } from "react-toastify";

// Convert temperature from Celsius to Fahrenheit
export const convertToFahrenheit = (celsius) => {
  return parseFloat(((celsius * 9) / 5 + 32).toFixed(2));
};

// Fetch weather data
export const fetchWeatherData = async (url, API, place) => {
  const options = {
    method: "GET",
    url: url,
    params: {
      aggregateHours: "24",
      location: place,
      contentType: "json",
      unitGroup: "metric",
      shortColumnNames: 0,
    },
    headers: {
      "x-rapidapi-key": API,
      "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    toast.error("Error fetching weather data.Try after some time.");
    throw new Error("Error fetching weather data: ", error);
  }
};
