import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CountriesCrossedScreen, RegisterScreen} from '../register';
import {roots} from './index';
import {strings} from '../core/strings';
import {BackButton} from '../core/components';

const Stack = createStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator
    screenOptions={{gestureEnabled: false}}
    initialRouteName={roots.registerStack}>
    <Stack.Screen
      name={roots.registerStack}
      component={RegisterScreen}
      options={{title: strings.declaratie}}
    />
    <Stack.Screen
      name={roots.countriesCrossed}
      options={{
        title: strings.countriesCrossed,
        headerLeft: () => <BackButton />,
      }}
      component={CountriesCrossedScreen}
    />
  </Stack.Navigator>
);

export default RegisterStack;
