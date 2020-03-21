import React from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {MainNavigator} from './src/navigation';

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar barStyle="dark-content" />
    <MainNavigator />
  </View>
);

export default App;
