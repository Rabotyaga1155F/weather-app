import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {IDailyForecastItemProps} from './daily-forecast-item.types.ts';

const DailyForecastItem: FC<IDailyForecastItemProps> = ({day, temp, image}) => {
  return (
    <View
      className={
        'flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr -4 bg-black mb-1 mx-2'
      }>
      <Image className={'w-12 h-12'} source={image} />
      <Text className={'text-white'}>{day}</Text>
      <Text className={'text-white text-xl font-semibold'}>{temp}&#176;</Text>
    </View>
  );
};

export default DailyForecastItem;
