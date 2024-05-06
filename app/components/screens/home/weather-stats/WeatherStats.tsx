import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IWeatherStatsProps} from './weather-stats.types.ts';

const WeatherStats: FC<IWeatherStatsProps> = ({
  humidity,
  wind,
  temperature,
}) => {
  return (
    <View className={'flex-row justify-between mx-4'}>
      <View className={'flex-col space-x-2 items-center'}>
        <Text className={'text-white '}>Wind</Text>
        <Text className={'text-white  font-bold text-2xl pt-1'}>{wind}км</Text>
      </View>
      <View className={'flex-col space-x-2 items-center'}>
        <Text className={'text-white '}>Temp</Text>
        <Text className={'text-white  font-bold text-2xl pt-1'}>
          {temperature} &#176;
        </Text>
      </View>
      <View className={'flex-col space-x-2 items-center'}>
        <Text className={'text-white '}>Humidity</Text>
        <Text className={'text-white  font-bold text-2xl pt-1'}>
          {humidity}%
        </Text>
      </View>
    </View>
  );
};

export default WeatherStats;
