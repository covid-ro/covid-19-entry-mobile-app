import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen, CountriesCrossedScreen} from '../register';
import {strings} from '../core/strings';
import {LanguageSelectionScreen} from '../languageSelection';
import RegisterStack from './RegisterStack';
import {roots} from '.';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{gestureEnabled: false}} headerMode="none">
      <Stack.Screen
        name={roots.languageSelect}
        component={LanguageSelectionScreen}
      />
      <Stack.Screen name={roots.registerStack} component={RegisterStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
