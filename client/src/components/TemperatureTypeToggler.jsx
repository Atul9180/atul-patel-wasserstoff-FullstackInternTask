import React from "react";

const TemperatureTypeToggler = ({ unit, setUnit }) => {
  const isCelsius = unit === "metric";

  const toggleTemperatureType = () => {
    const newUnit = isCelsius ? "imperial" : "metric";
    setUnit(newUnit);
  };

  return (
    <div
      className="flex items-center justify-between px-2.5 w-[60px] font-bold rounded-full bg-[rgba(255,250,250,0.884)] cursor-pointer transition-colors duration-400 ease-in-out shadow-md relative"
      onClick={toggleTemperatureType}
    >
      <div className={`label celsius`}>℃</div>
      <div className={`label fahrenheit`}>℉</div>
      <div
        className={`absolute left-0 flex items-center justify-center transition-transform duration-400 ease-in-out text-black ${
          isCelsius
            ? "w-[50%] h-full rounded-[20px] bg-[#00bcd4] text-white translate-x-0"
            : "w-[50%] h-full rounded-[20px] bg-[#ff9800] text-white translate-x-[30px]"
        }`}
      >
        &deg;{isCelsius ? "C" : "F"}
      </div>
    </div>
  );
};

export default TemperatureTypeToggler;
