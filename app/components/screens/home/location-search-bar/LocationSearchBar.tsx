import React, {FC, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ILocationSearchBarProps} from './location-search-bar.types.ts';
import {debounce} from 'lodash';

const LocationSearchBar: FC<ILocationSearchBarProps> = ({
  setSearch,
  search,
  handleSearch,
  locations,
  handleFindLocation,
}) => {
  const handleTextDebouce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View className={'h-[7%] mx-4 relative z-50'}>
      {search ? (
        <LinearGradient
          colors={['#DD56D8', '#0728B3']}
          start={{x: 0, y: 0}}
          className={'flex-row justify-end items-center rounded-full'}>
          <TextInput
            onChangeText={handleTextDebouce}
            className={'pl-6 h-10 flex-1 text-white '}
            placeholder={search ? 'Find city' : ''}
            placeholderTextColor={'white'}
          />
          <TouchableOpacity
            onPress={() => setSearch(!search)}
            className={'rounded-full p-3 m-1 bg-white'}>
            <Image
              className={'h-3 w-3 '}
              source={require('../../../../assets/icons/loop.png')}
            />
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          onPress={() => setSearch(!search)}
          className={
            'rounded-full h-9 w-9 p-3 m-1 bg-white flex-row justify-center ml-auto'
          }>
          <Image
            className={'h-3 w-3 my-auto  '}
            source={require('../../../../assets/icons/loop.png')}
          />
        </TouchableOpacity>
      )}
      {locations.length > 0 && search ? (
        <View className={'absolute w-full bg-gray-300 top-16 rounded-3xl'}>
          {locations.map((location, index) => {
            const isLast = index + 1 != locations.length;
            return (
              <TouchableOpacity
                onPress={() => handleFindLocation(location)}
                key={index}
                className={
                  isLast
                    ? 'flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400'
                    : 'flex-row items-center border-0 p-3 px-4 mb-1'
                }>
                <Image
                  className={'h-4 w-4 mr-2'}
                  source={require('../../../../assets/icons/location.png')}
                />
                <Text className={'text-black text-lg '}>
                  {location?.name}, {location?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default LocationSearchBar;
