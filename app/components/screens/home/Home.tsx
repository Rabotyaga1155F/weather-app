import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import * as Progress from 'react-native-progress';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import DailyForecastItem from './daily-forecast-item/DailyForecastItem.tsx';
import WeatherStats from './weather-stats/WeatherStats.tsx';
import LocationSearchBar from './location-search-bar/LocationSearchBar.tsx';

import {
  fetchLocations,
  fetchWeatherForecast,
} from '../../../api/weather.api.ts';

import {ILocation, IWeatherData} from '../../../types/weaher-forecast.types.ts';

import {weatherImg} from '../../../constants';

import {getData, storeData} from '../../../utils/asyncStorage.ts';

const Home: FC = () => {
  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [weather, setWeather] = useState<IWeatherData>();
  const [isLoading, setIsLoading] = useState(true);
  const handleFindLocation = (location: ILocation) => {
    setLocations([]);
    setSearch(false);
    setIsLoading(true);
    fetchWeatherForecast({
      city: location.name,
      days: '7',
    }).then((data: IWeatherData) => {
      setWeather(data);
      setIsLoading(false);
      storeData('city', location.name);
    });
  };

  useEffect(() => {
    console.log(locations);
  }, [locations]);
  const handleSearch = (searchString: string) => {
    if (searchString.length > 2) {
      fetchLocations({city: searchString}).then((data: ILocation[]) => {
        setLocations(data);
      });
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const city = await getData('city');
    let cityName = 'Moscow';
    if (city) cityName = city;
    fetchWeatherForecast({
      city: cityName,
      days: '7',
    }).then(data => {
      setWeather(data);
      setIsLoading(false);
    });
  };

  return (
    <View className={'flex-1 relative bg-backmain pt-3'}>
      <StatusBar barStyle={'default'} />
      {isLoading ? (
        <View className={'flex-1 flex-row justify-center items-center'}>
          <Progress.CircleSnail thickness={10} size={100} color={'white'} />
        </View>
      ) : (
        <SafeAreaView className={'flex flex-1'}>
          <LocationSearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            locations={locations}
            handleFindLocation={handleFindLocation}
          />
          <View className={'mx-4 flex justify-around flex-1 mb-2'}>
            <Text className={'text-white text-center text-2xl font-bold'}>
              {weather?.location.name},
              <Text className={'text-lg font-semibold text-gray-300'}>
                {' ' + weather?.location.country}
              </Text>
            </Text>
            <View className={'flex-row justify-center'}>
              <Image
                className={'h-52 w-52'}
                source={
                  weatherImg[
                    weather?.current?.condition?.text ?? 'defaultImage'
                  ]
                }
              />
            </View>
            <View className={'space-y-2'}>
              <Text
                className={'text-center font-bold text-white text-3xl ml-5'}>
                {weather?.current?.condition?.text}
              </Text>
            </View>
            <WeatherStats
              wind={weather?.current?.wind_kph}
              temperature={weather?.current.temp_c}
              humidity={weather && weather.current.humidity}
            />
          </View>
          <View className={'mb-2 space-y-3 mx-2 '}>
            <LinearGradient
              className={'rounded-3xl '}
              colors={['#DD56D8', '#0728B3']}
              start={{x: 0, y: 0}}>
              <View className={'flex-row items-center mx-5 space-x-2'}>
                <Text className={'text-white  font-medium text-base py-4'}>
                  Daily forecast
                </Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}>
                {weather?.forecast?.forecastday?.map((day, index) => {
                  const dayName = moment(day.date).format('dd');
                  return (
                    <View key={index}>
                      <DailyForecastItem
                        temp={day?.day.avgtemp_c}
                        image={weatherImg[day?.day?.condition?.text ?? '']}
                        day={dayName}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </LinearGradient>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default Home;
