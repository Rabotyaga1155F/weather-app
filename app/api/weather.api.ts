import axios from 'axios';
import {IFindLocation} from '../types/find-location.types.ts';

interface IForecastData {
  city: string;
  days: string;
}

interface ILocationData {
  city: string;
}

interface IApiCallOptions {
  method: string;
  url: string;
}

interface IApiResponse<T> {
  data: T;
}

const forecastEndpoint = (data: IForecastData) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${data.city}&days=${data.days}&aqi=no&alerts=no`;

const locationsEndpoint = (data: ILocationData) =>
  `https://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${data.city}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };
  try {
    const res = await axios.request(options);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchWeatherForecast = (data: {city: string; days: string}) => {
  return apiCall(forecastEndpoint(data));
};
export const fetchLocations = (data: {city: string}) => {
  return apiCall(locationsEndpoint(data));
};
