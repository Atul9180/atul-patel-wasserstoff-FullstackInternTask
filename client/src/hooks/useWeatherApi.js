import { useState, useEffect } from "react";
import { fetchWeatherData, convertToFahrenheit } from "../utils/weatherUtils";
import { toast } from "react-toastify";

const useWeatherApi = (url, API, place) => {
  const [weather, setWeather] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("metric");
  const [isLoading, setIsLoading] = useState(false);
  const [celciusTemperature, setCelciusTemperature] = useState({});
  const [fahrenheitTemperature, setFahrenheitTemperature] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchWeatherData(url, API, place);
        const result = Object.values(data.locations)[0];
        // Segregate required temperatures-- for conversion to Fahrenheit
        const currentDayTemp = result.values[0].temp;
        const currentDayMinTemp = result.values[0].mint;
        const currentDayMaxTemp = result.values[0].maxt;
        const currentDayFeelsLikeTemp = result.values[0].heatindex;
        const forecastTemps = result.values.slice(1, 7).map((day) => day.temp);

        // Store Celsius temperatures
        setCelciusTemperature({
          currentDayTemp,
          currentDayMinTemp,
          currentDayMaxTemp,
          currentDayFeelsLikeTemp,
          forecastTemps,
        });

        // Convert and store Fahrenheit temperatures
        setFahrenheitTemperature({
          currentDayTemp: convertToFahrenheit(currentDayTemp),
          currentDayMinTemp: convertToFahrenheit(currentDayMinTemp),
          currentDayMaxTemp: convertToFahrenheit(currentDayMaxTemp),
          currentDayFeelsLikeTemp: convertToFahrenheit(currentDayFeelsLikeTemp),
          forecastTemps: forecastTemps.map((temp) => convertToFahrenheit(temp)),
        });

        setLocation(result.address); // City
        setForecastData(result.values); // For forecast data
        setWeather(result.values[0]); // For current day data
      } catch (error) {
        console.log(error);
        toast.error(
          "Input city not found. City name incorrect or server-side error"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [place, url, API]);

  // get data
  const getTemperatureData = () => {
    return unit === "metric" ? celciusTemperature : fahrenheitTemperature;
  };

  return {
    isLoading,
    weather,
    forecastData,
    location,
    unit,
    setUnit,
    temperatureData: getTemperatureData(),
  };
};

export default useWeatherApi;
