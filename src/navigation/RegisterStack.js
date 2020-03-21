import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CountriesCrossedScreen, RegisterScreen} from '../register';
import {roots} from './index';
import {strings} from '../core/strings';

const Stack = createStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator
    screenOptions={{gestureEnabled: false}}
    initialRouteName={roots.countriesCrossed}>
    <Stack.Screen name={'Declaratie'} component={RegisterScreen} />
    <Stack.Screen
      name={roots.countriesCrossed}
      options={{title: strings.countriesCrossed}}
      component={CountriesCrossedScreen}
    />
  </Stack.Navigator>
);

export default RegisterStack;
