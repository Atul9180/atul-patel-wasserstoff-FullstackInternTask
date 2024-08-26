# Demo: https://atul-patel-wasserstoff.onrender.com

## Overview

This is a weather application built using React and Vite. It provides current weather information and a 5-day forecast for any city. The app features a responsive design and includes temperature toggling between Celsius and Fahrenheit.

## Problem Solved
The problem was to create a responsive weather application that provides accurate and real-time weather data along with a 5-day forecast. The challenge involved integrating a weather API, ensuring a responsive design for different devices, and implementing a user-friendly interface.

## Solution
API Integration: Used a weather API(visual-crossing-weather) to fetch current weather data and forecast information.
Responsive Design: used CSS Flexbox for layout and responsive design to ensure compatibility across devices.
State Management: Utilized React Context API to manage and share global state, such as weather data and user preferences, across different components.
Deployment: Configured the app for deployment using modern tools like Render and Vercel to ensure easy hosting and scalability. Deployed on render.

## Features

- **Current Weather Display**: Shows the current weather conditions including temperature, humidity, wind speed, and weather icon.
- **5-Day Forecast**: Provides a forecast for the next 5 days with temperature and weather conditions.
- **Temperature Toggle**: Allows users to switch between Celsius and Fahrenheit.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool that provides a fast development environment.
- **CSS Flexbox**: For responsive layouts and alignment.
- **React Toastify**: For displaying alerts/success/error popups.
- **visual-crossing-weather Api**: For getting weather data used visual-crossing-weather api.

## Installation and Setup

### Prerequisites

- Node.js (version 16 or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Atul9180/atul-patel-wasserstoff-FullstackInternTask.git
cd client
```

### Create .env file with below fields:

VITE_API_KEY="your rapid Api key"

VITE_WEATHER_BASE_URL="https://visual-crossing-weather.p.rapidapi.com/forecast"

```bash
npm install
npm run dev
```

### Usage:
After deploying the app, users can:

Enter a city name to view the current weather and forecast.
Toggle between Celsius and Fahrenheit to view temperature in their preferred unit.
View weather conditions and forecast in a user-friendly layout.


