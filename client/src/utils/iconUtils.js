import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import unknown from "../assets/icons/unknown.png";

const iconMap = {
  cloud: cloud,
  rain: rain,
  clear: sun,
  thunder: storm,
  fog: fog,
  snow: snow,
  wind: wind,
};

export const getIconForWeather = (iconString) => {
  if (!iconString) {
    return unknown; // Return a default icon if iconString is undefined or null
  }

  const lowerCaseIconString = iconString.toLowerCase();
  for (const [key, value] of Object.entries(iconMap)) {
    if (lowerCaseIconString.includes(key)) {
      return value;
    }
  }
  return unknown; // Return default icon if no match is found
};
