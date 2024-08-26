import React from "react";

const TemperatureTypeToggler = ({ unit, setUnit }) => {
  const isCelsius = unit === "metric";

  const toggleTemperatureType = () => {
    const newUnit = isCelsius ? "imperial" : "metric";
    setUnit(newUnit);
  };

  return (
    <div
      className={`temperatureType-toggler ${
        isCelsius ? "celsius-background" : "fahrenheit-background"
      }`}
      onClick={toggleTemperatureType}
    >
      <div className={`label celsius`}>℃</div>
      <div className={`label fahrenheit`}>℉</div>
      <div className={`toggle-icon ${isCelsius ? "celsius" : "fahrenheit"}`}>
        {isCelsius ? "℃" : "℉"}
      </div>
    </div>
  );
};

export default TemperatureTypeToggler;
