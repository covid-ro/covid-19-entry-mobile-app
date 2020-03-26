import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {MainNavigator} from './src/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </View>
  );
};

export default App;
