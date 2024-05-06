interface IWeatherImg {
  [key: string]: any; // Define index signature
}

export const weatherImg: IWeatherImg = {
  'Partly cloudy': require('../assets/images/cloudy-with-sun.png'),
  'Partly Cloudy ': require('../assets/images/cloudy-with-sun.png'),
  'Partly Cloudy': require('../assets/images/cloudy-with-sun.png'),
  'Moderate rain': require('../assets/images/rain.png'),
  'Patchy rain possible': require('../assets/images/rain.png'),
  Sunny: require('../assets/images/sun.png'),
  Clear: require('../assets/images/sun.png'),
  Overcast: require('../assets/images/cloud.png'),
  'Overcast ': require('../assets/images/cloud.png'),
  'Cloudy ': require('../assets/images/cloud.png'),
  Cloudy: require('../assets/images/cloud.png'),
  'Light rain': require('../assets/images/lightrain.png'),
  'Light rain shower': require('../assets/images/lightrain.png'),
  'Moderate rain at times': require('../assets/images/rain.png'),
  'Heavy rain': require('../assets/images/heavyrain.png'),
  'Heavy rain at times': require('../assets/images/heavyrain.png'),
  'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
  'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
  'Patchy rain nearby': require('../assets/images/rain.png'),
  Mist: require('../assets/images/mist.png'),
  Fog: require('../assets/images/mist.png'),
  other: require('../assets/images/rain.png'),
};
