export type CurrentWeather = {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  weather_code: number;
  wind_speed_10m: number;
};

export type DailyWeather = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
};

export type WeatherResponse = {
  latitude: number;
  longitude: number;
  timezone: string;
  current: CurrentWeather;
  dairy: DailyWeather;
};

export type ForecastItem = {
  date: string;
  weatherCode: number;
  maxTemperature: number;
  minTemperature: number;
  precipitationProbability: number;
};
