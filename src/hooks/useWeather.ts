"use client";

import { WeatherResponse } from "@/types/weather";
import { useState } from "react";

const LATITUDE = 25.2048;
const LONGITUDE = 55.2708;
const WEATHER_API_URL =
  "https://api.open-meteo.com/v1/forecast" +
  `?latitude=${LATITUDE}` +
  `&longitude=${LONGITUDE}` +
  "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m" +
  "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
  "&timezone=auto" +
  "&forecast_days=7";

type UseWeatherReturn = {
  weather: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
};

// export const useWeather = (): UseWeatherReturn => {
//   const [weather, setWeather] = useState<WeatherResponse | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
// };
