import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LanguageSelectionScreen} from '../languageSelection';
import RegisterStack from './RegisterStack';
import FinishNavigator from './FinishNavigator';
import {roots} from '.';
import {InformationScreen} from '../register';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      headerMode="none"
      initialRouteName={roots.languageSelect}>
      <Stack.Screen
        name={roots.languageSelect}
        component={LanguageSelectionScreen}
      />
      <Stack.Screen
        name={roots.informationScreen}
        component={InformationScreen}
      />
      <Stack.Screen name={roots.registerStack} component={RegisterStack} />
      <Stack.Screen name={roots.finishNavigator} component={FinishNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
