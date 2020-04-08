import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CountriesCrossedScreen,
  RegisterScreen,
  CountyAddressScreen,
} from '../register';
import {roots} from './index';
import {strings} from '../core/strings';
import {BackButton} from '../core/components';
import {I18n} from '../core/strings';

const Stack = createStackNavigator();

const RegisterStack = () => (
  <Stack.Navigator
    screenOptions={{gestureEnabled: false}}
    initialRouteName={roots.registerScreen}>
    <Stack.Screen
      name={roots.registerScreen}
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
    <Stack.Screen
      name={roots.countyScreen}
      options={{
        title: I18n.t('selectCounty'),
        headerLeft: () => <BackButton />,
      }}
      component={CountyAddressScreen}
    />
  </Stack.Navigator>
);

export default RegisterStack;
