import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegisterScreen, CountriesCrossedScreen} from '../register';
import roots from './roots';
import {strings} from '../core/strings';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
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
  </NavigationContainer>
);

export default MainStackNavigator;
